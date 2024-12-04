const redis = require('redis');

// Create a Redis client for the subscriber
const client = redis.createClient();

// On successful connection
client.on('connect', function () {
  console.log('Redis client connected to the server');
});

// On error
client.on('error', function (err) {
  console.log(`Redis client not connected to the server: ${err}`);
});

// Subscribe to the 'holberton school channel'
client.subscribe('holberton school channel');

// When a message is received
client.on('message', function (channel, message) {
  console.log(message);

  // If the message is 'KILL_SERVER', unsubscribe and quit
  if (message === 'KILL_SERVER') {
    client.unsubscribe('holberton school channel');
    client.quit();
  }
});

