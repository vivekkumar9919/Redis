const createRedisConnection = require('../client');

async function subscribeMessages(client){
    
    await client.subscribe('notifications', (message) => {
        console.log(`Received message: ${message}`);
    });

    console.log('Subscriber connected and waiting for messages...');
}

(async () => {
    const client = await createRedisConnection()
    await subscribeMessages(client);
})();


