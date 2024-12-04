import redis from 'redis';

const client = redis.createClient();

// Connect to Redis
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Handle error during connection
client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err.message}`);
});

