
var nodemailer = require('nodemailer');
require('dotenv').config({ path: './config.env' });
var handlebars = require('handlebars');
const mg = require("nodemailer-mailgun-transport");
const path = require('path');
const fs = require('fs');

const emailTemplateSource1 = fs.readFileSync(path.join(__dirname, "../Views/email/temp1.handlebars"), "utf8");


// Below uses Mailgun
const mailgunAuth = {
    auth: {
      api_key: "5e5d8043195e0629bc739c0293c4f0e2-fe066263-494b8937",
      domain: "sandbox65a19ba85afc4da98eeb3173dbfa7c3e.mailgun.org"
    }
  }

    const transport = nodemailer.createTransport(mg(mailgunAuth));



const template1 = handlebars.compile(emailTemplateSource1);

//send out email

module.exports.sendConfirmationEmail = (name, email, uid) => {
    const htmlToSend1 = template1({uid:uid, name: name})
    transport.sendMail({
      from: "SAAS CEG <postmaster@sandbox65a19ba85afc4da98eeb3173dbfa7c3e.mailgun.org>",
      to: 'kannan2122000@gmail.com',
      subject: `Sign up successful, ${name}`,
      html: htmlToSend1,
    }).catch(err => console.log(err));
  };
