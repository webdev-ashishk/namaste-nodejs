const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail", // or use another service
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.EMAIL_PASS, // your email password or app-specific password
  },
});
let mailOptions = {
  from: "ashishYT098@gmail.com",
  to: "webdev.ashishk@gmail.com",
  subject: "THIS MAIL SEND SECOND TIME 22222222222222222222 ",
  text: "NODE MAILER IS GREAT PACKAGE OF NODEJS DO YOU KNOW 2222222222222222222222222222222222222222222222222222222 !!",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error occurred: ", error);
  }
  console.log("Message sent: %s", info.messageId);
});
