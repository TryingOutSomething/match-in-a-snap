const { getNearbyRestaurants } = require('../services/restaurant');

const getRestaurants = async (req, res, next) => {
  const { dietaryOptions, currentPage, location, mealChoice } = req.query;

  try {
    let restaurants = await getNearbyRestaurants({
      coordinates: location,
      cuisineType: dietaryOptions,
      currentPage: currentPage,
      userMealChoice: mealChoice
    });

    res.status(200).send(restaurants);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRestaurants
};