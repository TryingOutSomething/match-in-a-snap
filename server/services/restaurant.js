const Restaurant = require('../db/models/restaurants');
const { restaurantMapper } = require('../mappers/restaurant-mapper');
const { getTodayDate, isWithinBusinessHours } = require('../utils/date_util');

const MAX_DISTANCE = 2000;
const DEFAULT_PAGING_SIZE = 10;

const getNearbyRestaurants = (coordinates, cuisineType, currentPage) => {
  return new Promise(((resolve, reject) => {
    Restaurant.find(buildGetNearbyRestaurantsQuery(coordinates, cuisineType))
              .skip(currentPage)
              .limit(DEFAULT_PAGING_SIZE)
              .exec((err, restaurants) => {
                if (err) {
                  reject(err);
                }

                // process the data
                // 1. get today and current time
                // 2. filter dietary options
                // 3. filter restaurants that are not within the range
                // 4. return to user

                resolve(restaurantMapper(restaurants));
              });
  }));
};

const buildGetNearbyRestaurantsQuery = (coordinates, cuisineType) => {
  let query = {
    $and: [{
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [coordinates.longitude, coordinates.latitude]
          },

          $maxDistance: MAX_DISTANCE
        }
      }
    }]
  };

  if (cuisineType) {
    query['$and'].push({
      cuisine_type: { $in: cuisineType }
    });
  }

  return query;
};

module.exports = {
  getNearbyRestaurants
};