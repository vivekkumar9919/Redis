const createRedisConnection = require('../client');

async function paymentConsumer(client) {
    // Ensure a consumer group exists
    // await client.xGroupCreate('order_stream', 'payment_group', '0', { MKSTREAM: true });
    console.log('Payment Consumer started...');

    while (true) {
        try {
            const response = await client.xReadGroup(
                'payment_group', 'payment_consumer',
                { key: 'order_stream', id: '>' },
                { COUNT: 1, BLOCK: 5000 }  // waits 5 seconds if no message
            );

            if (!response || response[0].messages.length === 0) {
                console.log("No new messages in the stream.");  
                continue;  
            }
            console.log(response && response[0].messages)

            for (const message of response[0].messages) {
                const { id, message: fields } = message;
                console.log('Processing Payment for Order:', message);

                // Update order status to Payment Confirmed
                const updatedFields = {
                    ...fields,
                    status: 'Payment Confirmed',
                    timestamp: new Date().toISOString()
                };
                console.log("updatedFields", updatedFields)
                await client.xAdd('payment_stream', '*', updatedFields);
                // await client.hSet(`order_status:${fields.order_id}`, updatedFields);

                // Acknowledge the message to remove it from the stream
                await client.xAck('order_stream', 'payment_group', id);
            }

        } catch (error) {
            console.error("Error processing payment:", error);
        }
    }


}

(async () => {
    const client = await createRedisConnection();
    await paymentConsumer(client);
})()