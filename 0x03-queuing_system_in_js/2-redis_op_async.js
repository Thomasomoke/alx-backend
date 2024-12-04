const redis = require('redis');
const { promisify } = require('util');

// Create a Redis client
const client = redis.createClient();

// Promisify the Redis client's 'get' and 'set' methods
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

// Event handler when the client connects
client.on('connect', function () {
  console.log('Redis client connected to the server');
});

// Function to set a new school and its value in Redis (still using callback)
async function setNewSchool(schoolName, value) {
  try {
    const result = await setAsync(schoolName, value); // Using await for async set operation
    console.log(`Reply: ${result}`);
  } catch (error) {
    console.error('Error setting school:', error);
  }
}

// Function to display the value of a school from Redis using async/await
async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName); // Await the async get operation
    console.log(value);  // logs the value of the school
  } catch (error) {
    console.error('Error retrieving the value:', error);
  }
}

// Example function calls (per requirements)
async function run() {
  await displaySchoolValue('Holberton');
  await setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

// Call the run function to execute the tasks
run();

