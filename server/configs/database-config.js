require('dotenv').config();

const config = {
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  uri: process.env.MONGO_URI,
};

module.exports = config;
