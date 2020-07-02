const { getNearbyRestaurants } = require('../services/restaurant');
const { convertPostalCodeToLatLon } = require('../services/api');

const getRestaurants = async (req, res, next) => {
  const { dietaryOptions, currentPage, postalCode, mealOption } = req.query;

  try {
    let location = await convertPostalCodeToLatLon(postalCode);
    let restaurants = await getNearbyRestaurants({
      coordinates: location,
      cuisineType: dietaryOptions,
      currentPAge: currentPage,
      userMealChoice: mealOption
    });

    res.status(200).send(restaurants);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRestaurants
};