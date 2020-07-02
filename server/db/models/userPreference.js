const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
  uuid: {
    type: String
  },

  postalCode: {
    type: String
  },

  age: {
    type: Number
  },

  gender: {
    type: String
  },

  meal_preference: {
    type: String
  },

  diet_preference: {
    type: String
  },

  restaurant_name: {
    type: String
  },

  restaurant_address: {
    type: String
  }
});

const userPreference = mongoose.model('UserPreference', userPreferenceSchema);

module.exports = userPreference;