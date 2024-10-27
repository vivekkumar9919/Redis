
const createRedisConnection = require('./client')

async function redisOperations(client) {
    try {
        // Set and Get a key-value pair
        await client.set('name', 'Vivek');
        const name = await client.get('name');
        console.log('Name:', name);

        // Increment a counter
        await client.set('counter', 0);
        await client.incr('counter');
        const counter = await client.get('counter');
        console.log('Counter:', counter);

        // List operations
        await client.lPush('languages', 'Python');
        await client.lPush('languages', 'Java');
        await client.rPush('languages', 'JavaScript');
        const len = await client.lLen('languages');
        const languages = await client.lRange('languages', 0, -1);
        console.log('Languages:', languages, len);

        // Hash operations
        await client.hSet('user:1001', 'name', 'Vivek');
        await client.hSet('user:1001', 'age', '25');
        const user = await client.hGetAll('user:1001');
        console.log('User 1001:', user);

        // Check if a key exists
        const nameExists = await client.exists('name');
        console.log("Does 'name' exist?", nameExists === 1);

        // Delete a key
        await client.del('name');
        const deletedName = await client.get('name');
        console.log('Deleted name, now:', deletedName);

    } catch (err) {
        console.error('Error during Redis operations:', err);
    } finally {
        await client.quit();
    }
}

(async () => {
    const client = await createRedisConnection();
    await redisOperations(client);
})();
