// Constants for controlling the view of the form
export const EDITING_STATUS = 'Editing',
  LOADING_STATUS = 'Loading',
  RESULT_STATUS = 'Result';

// Constants for colours used with v-bind
export const INPUT_FOCUS_BORDER_COLOUR = 'yellow darken-3',
  SELECTED_CHIP_COLOUR = 'yellow--text text--darken-4',
  BUTTON_COLOUR_PRIMARY = '#FFDF10',
  BUTTON_COLOUR_SECONDARY = '#FFD966';

// Constants for form input
export const DIETARY_OPTIONS = [
    'Asian',
    'Western',
    'European',
    'Vegetarian',
    'Vegan',
    'Halal'
  ],
  MEAL_OPTIONS = ['Breakfast', 'Lunch', 'Dinner'],
  GENDER_OPTIONS = ['Male', 'Female', 'Rather Not Say'];

import { v4 as uuidV4 } from 'uuid';

export const DEFAULT_PAGE_NO = 1;

export const DEFAULT_USER_PREFERENCE_OBJECT = {
  userId: uuidV4(),
  postalCode: '',
  age: '',
  gender: '',
  mealChoice: [],
  dietaryOptions: [],
  currentPage: DEFAULT_PAGE_NO
};

