const UserPreference = require('../db/models/userPreference');

const saveUserPreference = (userPreference) => {
  return new Promise((resolve, reject) => {
    let { userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address } = userPreference;

    let newUserPreference = new UserPreference({
      userId: userId,
      postal_code: postalCode,
      age: age,
      gender: gender,
      meal_preference: mealChoice,
      diet_preference: dietaryOptions,
      restaurant_name: restaurantName,
      restaurant_address: address
    });

    newUserPreference.save((err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result._id);
    });
  });
};

module.exports = {
  saveUserPreference
};