const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant-locator');

router.get('/locations', restaurantController.getNearbyRestaurants);

module.exports = router;