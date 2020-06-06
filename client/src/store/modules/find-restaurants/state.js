import { DEFAULT_USER_PREFERENCE_OBJECT } from "@/constants/form-constants";

export default {
  restaurantList: [],
  viewingRestaurant: {},
  userPreference:
    JSON.parse(localStorage.getItem("userPreference")) ||
    DEFAULT_USER_PREFERENCE_OBJECT
};
