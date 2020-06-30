const Restaurant = require('../db/models/restaurants');
const {getTodayDate} = require('../utils/date_util');

const getNearbyRestaurants = (req, res) => {
  Restaurant.find({
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [103.83327351534075, 1.2941072067136903]
        },

        $maxDistance: 2000
      }
    }
  }).skip(0)
    .limit(10)
    .exec((err, restaurant) => {
      if (err) {
        return res.status(404).send('Not found');
      }

      // process the data
      // 1. get today and current time
      // 2. filter dietary options
      // 3. filter restaurants that are not within the range
      // 4. return to user
      res.status(200).send(restaurant);
    });
};

module.exports = {
  getNearbyRestaurants
};