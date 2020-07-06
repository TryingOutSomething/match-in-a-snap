const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
    userId: {
      type: String
    },

    postal_code: {
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
      type: Array
    },

    restaurant_name: {
      type: String
    },

    restaurant_address: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserPreference', userPreferenceSchema);