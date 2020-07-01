const Restaurant = require('../db/models/restaurants');
const { restaurantMapper } = require('../mappers/restaurant-mapper');
const { getTodayDate, isWithinBusinessHours } = require('../utils/date_util');

const MAX_DISTANCE = 2000;
const DEFAULT_PAGING_SIZE = 10;

const getNearbyRestaurants = (coordinates, cuisineType, currentPage, userMealChoice) => {
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
                // 2. filter restaurants that are not within the range
                // 3. return to user
                let filteredRestaurants = filterRestaurantsFromUserMealChoice(restaurants, userMealChoice);
                // resolve(restaurantMapper(filteredRestaurants));
                resolve(filteredRestaurants);
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

const filterRestaurantsFromUserMealChoice = (restaurants, userMealOption) => {
  let todayDate = getTodayDate();
  let restaurantsThatAreOpen = [];

  for (let i = 0; i < restaurants.length; i++) {
    let restaurantOperatingHoursToday = restaurants[i].business_hours[todayDate];

    for (let j = 0; j < restaurantOperatingHoursToday.length; j++) {
      if (restaurantOperatingHoursToday[j] === 'Closed' ||
        !isWithinBusinessHours(restaurantOperatingHoursToday[j], userMealOption) ||
        restaurantsThatAreOpen.includes(restaurants[i])
      ) {
        continue;
      }

      restaurantsThatAreOpen.push(restaurants[i]);
    }
  }

  return restaurantsThatAreOpen;
};

module.exports = {
  getNearbyRestaurants
};