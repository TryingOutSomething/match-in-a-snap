// Validation for input fields
export const requiredField = value =>
  !isEmptyField(value) || 'Field is required!';

// Validation before sending to server
const isEmptyField = value => {
  return value === '' || value === null;
};

const isEmptyList = list => typeof list === 'undefined' || list.length <= 0;


export const isInvalidAge = value => value <= 0 || value >= 150;

export const isInvalidPostalCode = value => value.length < 6;

export const isIncompleteForm = userPreference => {
  const { postalCode, age, gender, mealChoice, dietaryChoice } = userPreference;

  return !!(isEmptyField(postalCode) ||
    isEmptyField(age) ||
    isEmptyField(gender) ||
    isEmptyList(mealChoice) ||
    isEmptyList(dietaryChoice));
};
