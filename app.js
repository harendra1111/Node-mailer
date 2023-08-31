const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service provider
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

// Email details
const mailOptions = {
  from: 'your_email@gmail.com', // Sender address
  to: 'recipient@example.com', // List of recipients
  subject: 'Test Email', // Subject line
  text: 'This is a test email sent from Node.js using nodemailer.', // Plain text body
  // html: '<p>This is a test email sent from <b>Node.js</b> using <i>nodemailer</i>.</p>', // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
