const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant-locator');
const userController = require('../controllers/user');

const { isValidRestaurantParams } = require('../middlewares/request-validation');

router.get('/locations', isValidRestaurantParams, restaurantController.getRestaurants);
router.post('/userPreference', userController.saveUserSelectedChoice);

module.exports = router;