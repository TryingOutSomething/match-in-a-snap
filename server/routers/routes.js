const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant-locator');

const { isValidRestaurantParams } = require('../middlewares/request-validation');

router.get('/locations', isValidRestaurantParams, restaurantController.getRestaurants);

module.exports = router;