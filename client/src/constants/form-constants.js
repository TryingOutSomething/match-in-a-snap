// Constants for controlling the view of the form
export const EDITING_STATUS = "Editing",
  LOADING_STATUS = "Loading",
  RESULT_STATUS = "Result";

// Constants for colours used with v-bind
export const INPUT_FOCUS_BORDER_COLOUR = "yellow darken-3",
  SELECTED_CHIP_COLOUR = "yellow--text text--darken-4";

// Constants for form input
export const DIETARY_OPTIONS = [
    "Vegetarian",
    "Non beef",
    "No Spicy",
    "Halal",
    "Pescatarian",
    "Gluten-Free"
  ],
  MEAL_OPTIONS = ["Breakfast", "Lunch", "Dinner"],
  GENDER_OPTIONS = ["Male", "Female"];

export const DEFAULT_USER_PREFERENCE_OBJECT = {
  postalCode: "",
  age: "",
  gender: "",
  mealChoice: [],
  dietaryChoice: []
};
