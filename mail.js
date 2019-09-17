require('dotenv').config();
const api_key = process.env.API_KEY;
const DOMAIN = process.env.MY_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

function sendMail(name, email, subject, message, cb){

  const data = {
    from: `${name} ` + email,
    to: process.env.MY_EMAIL,
    subject: subject,
    text: message,
  };
  
  mailgun.messages().send(data, function (err, body) {
    if(err) return cb(err, null);
    else return cb(null, body);
  });
}

module.exports = sendMail;