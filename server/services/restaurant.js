const Restaurant = require('../db/models/restaurants');
const { restaurantMapper } = require('../mappers/restaurant-mapper');
const { getTodayDate, isWithinBusinessHours } = require('../utils/date-util');

const MAX_DISTANCE = 2000;
const DEFAULT_PAGING_SIZE = 10;

const getNearbyRestaurants = (queryParameters) => {
  const { coordinates, cuisineType, currentPage, userMealChoice } = queryParameters;

  let documentsToSkip = (currentPage - 1) * DEFAULT_PAGING_SIZE;

  return new Promise((resolve, reject) => {
      Restaurant.find(buildGetNearbyRestaurantsQuery(coordinates, cuisineType))
                .skip(documentsToSkip)
                .limit(DEFAULT_PAGING_SIZE)
                .exec((err, restaurants) => {
                  if (err) {
                    reject(err);
                  }

                  let filteredRestaurants = filterRestaurantsFromUserMealChoice(restaurants, userMealChoice);

                  resolve(restaurantMapper(filteredRestaurants));
                });
    }
  );
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

    if (!restaurantIsOpenFromUserMealOption(restaurantOperatingHoursToday, userMealOption)) {
      continue;
    }

    restaurantsThatAreOpen.push(restaurants[i]);
  }

  return restaurantsThatAreOpen;
};

const restaurantIsOpenFromUserMealOption = (restaurantOperatingHoursToday, userMealOption) => {
  for (let j = 0; j < restaurantOperatingHoursToday.length; j++) {
    if (restaurantOperatingHoursToday[j] === 'Closed' ||
      !isWithinBusinessHours(restaurantOperatingHoursToday[j], userMealOption)
    ) {
      continue;
    }

    return true;
  }

  return false;
};

module.exports = {
  getNearbyRestaurants
};