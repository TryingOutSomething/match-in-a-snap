const { getNearbyRestaurants } = require('../services/restaurant');
const { convertPostalCodeToLatLon } = require('../services/api');

const getRestaurants = async (req, res, next) => {
  const { dietaryOptions, currentPage, postalCode } = req.query;

  try {
    let location = await convertPostalCodeToLatLon(postalCode);
    let restaurants = await getNearbyRestaurants(location, dietaryOptions, currentPage);

    res.status(200).send(restaurants);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRestaurants
};