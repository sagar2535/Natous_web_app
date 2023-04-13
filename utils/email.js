// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1.) Create a Transporter

  const Transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 2.)Define the email options
  const mailOptions = {
    form: 'sagar kumar <test@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // 3.)Actually send the email
  await Transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
