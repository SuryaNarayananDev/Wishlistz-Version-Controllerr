const nodemailer = require('nodemailer');
const EMAIL=process.env.EMAIL
const EPASS=process.env.EPASS
async function sendEmail(content) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace with your email service provider
    auth: {
      user: EMAIL, // Replace with your email address
      pass: EPASS // Replace with your password
    }
  });

  const{emailto,
    emailsub,
    emailcontent}=content

  // Define email options
  
  const mailOptions = {
    from: EMAIL,
    to:emailto,
    subject:emailsub,
    html:emailcontent
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}

module.exports={sendEmail}
// Example usage:
// sendEmail('recipient@example.com', 'Test Email', 'This is a test email.');
