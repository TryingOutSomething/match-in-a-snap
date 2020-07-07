const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routers/routes');

let app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/', routes);
app.use((error, req, res, next) => {
  res.status(error.status || 500)
     .json({
       message: error.message,
       stack: process.env.NODE_ENV === 'production' ? 'Error occurred' : error.stack
     });
});

app.disable('x-powered-by');

module.exports = app;
