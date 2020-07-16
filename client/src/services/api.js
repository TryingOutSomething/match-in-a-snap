import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_SERVER_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getNearbyRestaurants(userPreference) {
    const { postalCode, dietaryOptions, mealChoice, currentPage } = userPreference;

    return apiClient.get('/locations', {
      params: { postalCode, dietaryOptions, mealChoice, currentPage }
    });
  },

  saveUserChoice(userSelectedChoice) {
    const { userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address } = userSelectedChoice;

    return apiClient.post('/savePreference', {
      userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address
    });
  }
};
