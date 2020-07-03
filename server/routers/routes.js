const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant-locator');
const userController = require('../controllers/user');

const { isValidRestaurantParams } = require('../middlewares/request-validation');
const { convertPostalCode } = require('../middlewares/convert-postal-code');

router.get('/locations', isValidRestaurantParams, convertPostalCode, restaurantController.getRestaurants);
router.post('/userPreference', userController.saveUserSelectedChoice);

module.exports = router;