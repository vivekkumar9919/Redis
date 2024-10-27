const createRedisConnection = require('./client')

async function redisOperations(client){
    const res1 = await client.xAdd(
        'race:france', '*', {
          'rider': 'Castilla',
          'speed': '30.2',
          'position': '1',
          'location_id': '1'
        }
      );
      console.log(res1); 
      
      const res2 = await client.xAdd(
        'race:france', '*', {
          'rider': 'Norem',
          'speed': '28.8',
          'position': '3',
          'location_id': '1'
        },
      );
      console.log(res2); 
      
      const res3 = await client.xAdd(
        'race:france', '*', {
          'rider': 'Prickett',
          'speed': '29.7',
          'position': '2',
          'location_id': '1'
        },
      );
      console.log(res3);
}

(async () => {
    const client = await createRedisConnection();
    await redisOperations(client);
})();