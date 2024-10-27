const redis = require('redis');

async function createRedisConnection() {
    const client = redis.createClient({
        host: '127.0.0.1',
        port: 6379,
    });
    client.on('connect', () => console.log('Connected to Redis!'));
    client.on('error', (err) => console.error(`Redis connection error: ${err}`));

    // Connect the client
    await client.connect(); 
    return client;
}

module.exports = createRedisConnection;