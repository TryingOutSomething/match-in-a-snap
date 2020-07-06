import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getNearbyRestaurants(userPreference) {
    const { postalCode, dietaryChoice, mealChoice, currentPage } = userPreference;

    return apiClient.get('/locations', {
      params: { postalCode, dietaryChoice, mealChoice, currentPage }
    });
  },

  saveUserChoice(userSelectedChoice) {
    const { userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address } = userSelectedChoice;

    return apiClient.post('/savePreference', {
      userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address
    });
  }
};
