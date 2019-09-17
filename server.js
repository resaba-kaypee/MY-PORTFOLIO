const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const {log} = console;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './src')));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/email', (req, res) => {
  const { name, subject, email, message } = req.body;
  log('Data: ', req.body);

  sendMail(name, email, subject, message, function(err, data) {
      if (err) {
        log('ERROR: ', err);
        return res.status(500).json({ message: err.message || 'Internal Error' });
      } else {
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
      }
  });
});

app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));