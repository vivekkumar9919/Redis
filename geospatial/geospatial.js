const createRedisConnection = require('../client');

async function addLocations(client, longitude, latitude, member) {
    const res1 = await client.geoAdd('locations', {
        longitude,
        latitude,
        member
    });
    console.log(res1)
}

async function searchLocation(client, longitude, latitude, radius, unit) {
    try {
        console.log("serch data", {longitude, latitude, radius, unit})
        const nearbyLocations = await client.geoSearch(
            'locations', {
                longitude,
                latitude
              },
              { radius,
                unit
              }
        );
        console.log('Nearby Locations:', nearbyLocations);
    } catch (err) {
        console.error('Error searching locations:', err);
    }
}

async function getDistance(client, place1, place2) {
    const distance = await client.geoDist('locations', place1, place2, 'km');
    console.log(`Distance between Sicily and Catania: ${distance} km`);
}

async function getPosition(client, place) {
    const position = await client.geoPos('locations', place);
    console.log(`Position of Sicily:`, position);
}


(async () => {
    const client = await createRedisConnection()
    // add locations
    await addLocations(client, 13.361389, 38.115556, 'Sicily');
    await addLocations(client, 15.087269, 37.502669, 'Catania');

    // search location  
    // Find locations within 100 km of (15, 37)
    await searchLocation(client, 15, 37, 100, 'km')

    // get distance
    await getDistance(client, 'Sicily', 'Catania')

    // get position
    await getPosition(client, 'Sicily')
    await client.disconnect();
})();


