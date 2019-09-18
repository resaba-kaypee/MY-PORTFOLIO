require('dotenv').config();
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const api_key = process.env.API_KEY;
const DOMAIN = process.env.MY_DOMAIN;
// const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

// function sendMail(name, email, subject, message, cb){

//   const data = {
//     from: `${name} ` + email,
//     to: process.env.MY_EMAIL,
//     subject: subject,
//     text: message,
//   };
  
//   mailgun.messages().send(data, function (err, body) {
//     if(err) return cb(err, null);
//     else return cb(null, body);
//   });
// }

const auth = {
  auth: {
    api_key: api_key,
    domain: DOMAIN
  }
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

function sendMail(name, email, subject, message, cb){
  nodemailerMailgun.sendMail({
    from: `${name} ` + email,
    to: process.env.MY_EMAIL,
    subject: subject,
    text: message,
  }, (err, info) => {
    if (err) {
      return cb(err, null);
    }
    else {
      return cb(null, info);
    }
  });
}


module.exports = sendMail;