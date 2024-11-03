const createRedisConnection = require('../client');

async function publishMessages(client){
    setInterval(async () => {
        const message = `Hello at ${new Date().toISOString()}`;
        await client.publish('notifications', message);
        console.log(`Published message: ${message}`);
    }, 3000);  // Every 3 seconds
}

(async () => {
    const client = await createRedisConnection()
    await publishMessages(client);
})();


