const createRedisConnection = require('../client');

async function addOrderEvent(orderId, customerName, client){
    const orderEvent = {
        order_id: orderId,
        customer_name: customerName,
        status: 'Order Placed',
        timestamp: new Date().toISOString()
    };
    // Add to streams
    await client.XADD("order_stream", '*', orderEvent);
    console.log("Order Placed");
    await client.quit();
}

(async () => {
    const client = await createRedisConnection()
    await addOrderEvent('ORD12347', 'vivek kumar', client);
})();


