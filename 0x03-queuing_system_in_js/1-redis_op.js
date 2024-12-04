const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Event handler when client connects
client.on('connect', function () {
  console.log('Redis client connected to the server');
});

// Function to set a new school and its value in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display the value of a school from Redis
function displaySchoolValue(schoolName) {
  client.get(schoolName, function (err, reply) {
    if (err) {
      console.log('Error retrieving the value:', err);
    } else {
      console.log(reply);  // logs the value of the school
    }
  });
}

// Example function calls (per requirements)
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

