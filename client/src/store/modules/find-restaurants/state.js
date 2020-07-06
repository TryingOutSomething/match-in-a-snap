import { DEFAULT_USER_PREFERENCE_OBJECT } from '@/constants/form-constants';
import { getUserPreference } from '@/utils/local-storage';

export default {
  restaurantList: [],
  viewingRestaurant: {},
  userPreference: JSON.parse(getUserPreference()) || DEFAULT_USER_PREFERENCE_OBJECT
};
