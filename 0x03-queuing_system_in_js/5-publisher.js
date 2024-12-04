const redis = require('redis');

// Create a Redis client for the publisher
const client = redis.createClient();

// On successful connection
client.on('connect', function () {
  console.log('Redis client connected to the server');
});

// On error
client.on('error', function (err) {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Function to publish a message after a delay
function publishMessage(message, time) {
  setTimeout(function () {
    console.log(`About to send ${message}`);
    client.publish('holberton school channel', message); // Publish to the channel
  }, time);
}

// Call publishMessage with different messages and times
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);

