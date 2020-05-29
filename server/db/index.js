const mongoose = require("mongoose");

const config = require("../configs/database-config");

const connect = () => {
  mongoose
    .connect(config.uri, config.options)
    .then(() => {
      console.log("Connected to Atlas");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connect };
