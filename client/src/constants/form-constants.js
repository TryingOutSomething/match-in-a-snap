// Constants for controlling the view of the form
export const EDITING_STATUS = 'Editing',
  LOADING_STATUS = 'Loading',
  RESULT_STATUS = 'Result';

// Constants for colours used with v-bind
export const INPUT_FOCUS_BORDER_COLOUR = 'yellow darken-3',
  SELECTED_CHIP_COLOUR = 'yellow--text text--darken-4';

// Constants for form input
export const DIETARY_OPTIONS = [
    'Vegetarian',
    'Non beef',
    'No Spicy',
    'Halal',
    'Chinese',
    'Gluten-Free'
  ],
  MEAL_OPTIONS = ['Breakfast', 'Lunch', 'Dinner'],
  GENDER_OPTIONS = ['Male', 'Female', 'Rather Not Say'];

import { v4 as uuidV4 } from 'uuid';

export const DEFAULT_USER_PREFERENCE_OBJECT = {
  userId: uuidV4(),
  postalCode: '',
  age: '',
  gender: '',
  mealChoice: [],
  dietaryOptions: [],
  currentPage: DEFAULT_PAGE_NO
};

export const DEFAULT_PAGE_NO = 1;
