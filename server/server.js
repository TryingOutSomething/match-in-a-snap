const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routers/routes');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/', routes);
app.use((error, req, res) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }

  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Error occurred' : error.stack
  });
});

module.exports = app;
