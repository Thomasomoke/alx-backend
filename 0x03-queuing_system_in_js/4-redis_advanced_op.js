const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Event handler when the client connects
client.on('connect', function () {
  console.log('Redis client connected to the server');
});

// Function to create a hash and store values
function createHash() {
  client.hset('HolbertonSchools', 'Portland', 50, redis.print);
  client.hset('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hset('HolbertonSchools', 'New York', 20, redis.print);
  client.hset('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hset('HolbertonSchools', 'Cali', 40, redis.print);
  client.hset('HolbertonSchools', 'Paris', 2, redis.print);
}

// Function to display the hash object
function displayHash() {
  client.hgetall('HolbertonSchools', function (err, object) {
    if (err) {
      console.log('Error retrieving hash:', err);
    } else {
      console.log(object);  // logs the entire hash object
    }
  });
}

// Create and display the hash
createHash();
displayHash();

