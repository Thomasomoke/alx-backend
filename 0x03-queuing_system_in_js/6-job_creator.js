const kue = require('kue');

// Create a queue named 'push_notification_code'
const queue = kue.createQueue();

// Job data object
const jobData = {
  phoneNumber: '123-456-7890', // Example phone number
  message: 'Hello, this is a test message' // Example message
};

// Create a job in the 'push_notification_code' queue
const job = queue.create('push_notification_code', jobData)
  .save(function (err) {
    if (err) {
      console.error('Error creating job:', err);
    } else {
      console.log(`Notification job created: ${job.id}`);
    }
  });

// Job completed
job.on('complete', function () {
  console.log('Notification job completed');
});

// Job failed
job.on('failed', function () {
  console.log('Notification job failed');
});

