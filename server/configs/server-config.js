var config = module.exports;

var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
  port: process.env.EXPRESS_PORT || 5001,
  ip: '127.0.0.1',
};

if (PRODUCTION) {
  // for example
  config.express.ip = '127.0.0.1';
}
