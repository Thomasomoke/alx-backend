const kue = require('kue');
const queue = kue.createQueue();

// Function to simulate sending notification
function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// Process jobs in the 'push_notification_code' queue
queue.process('push_notification_code', function (job, done) {
  // Extract phone number and message from the job data
  const { phoneNumber, message } = job.data;
  
  // Call sendNotification with the extracted data
  sendNotification(phoneNumber, message);
  
  // Mark the job as done
  done();
});

