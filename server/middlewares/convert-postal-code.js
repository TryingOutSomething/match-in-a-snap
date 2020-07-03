const { convertPostalCodeToLatLon } = require('../services/api');

const convertPostalCode = async (req, res, next) => {
  try {
    const { postalCode } = req.query;

    let location = await convertPostalCodeToLatLon(postalCode);

    if (!location.latitude || !location.longitude) {
      return res.status(500).send('Error occurred while processing postal code');
    }

    req.query.location = location;

    next();
  } catch (err) {
    return res.status(500).send('Error occurred while processing postal code');
  }
};

module.exports = {
  convertPostalCode
};