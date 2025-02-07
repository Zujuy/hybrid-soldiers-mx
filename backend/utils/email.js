const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendCredentialEmail = async (email, name, memberNumber, photoPath) => {
  const credentialHtml = `
    <div style="border: 2px solid black; padding: 20px; text-align: center;">
      <img src="cid:logo" style="width: 50px; position: absolute; top: 10px; right: 10px;">
      <img src="cid:photo" style="width: 100px; border-radius: 50%; margin-bottom: 20px;">
      <h1>${name}</h1>
      <p style="font-size: 12px; font-weight: light;">Member #${memberNumber}</p>
    </div>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Bienvenido Soldier. Esta es tu credicial',
    html: credentialHtml,
    attachments: [
      {
        filename: 'logo.png',
        path: path.join(__dirname, '../assets/logo.png'),
        cid: 'logo',
      },
      {
        filename: 'photo.png',
        path: photoPath,
        cid: 'photo',
      },
    ],
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendCredentialEmail };