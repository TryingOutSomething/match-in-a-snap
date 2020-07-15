const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const slowDown = require('express-slow-down');
const morgan = require('morgan');

const routes = require('./routers/routes');
const { slowDownConfig } = require('./configs/requests-limiter');

let app = express();

app.use(helmet());

app.enable('trust proxy');
app.use(slowDown(slowDownConfig));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));

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
