// netlify-functions/submit-form.js

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, phone, details } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'roman.beier15@ethereal.email',
      pass: 'r3BsJK8FUDbpZbRcHf'
    }
  });

  let mailOptions = {
    from: 'roman.beier15@ethereal.email',
    to: 'sabredeval@gmail.com',
    subject: 'New Rubbish Collection Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDetails: ${details}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
