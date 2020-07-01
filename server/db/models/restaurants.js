const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String
  },

  address: {
    type: String
  },

  business_hours: {
    monday: {
      type: [String]
    },

    tuesday: {
      type: [String]
    },

    wednesday: {
      type: [String]
    },

    thursday: {
      type: [String]
    },

    friday: {
      type: [String]
    },

    saturday: {
      type: [String]
    },

    sunday: {
      type: [String]
    }
  },

  business_hours_description: {
    type: String
  },

  cuisine_type: {
    type: [String]
  },

  phone: {
    type: String
  },

  website: {
    type: String
  },

  delivery_options: {
    type: String
  },

  image_url: {
    type: String
  },


  location: {
    type: {
      type: String,
    },

    coordinates: {
      type: [Number]
    }
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;