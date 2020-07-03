// import * as formStatus from "@/constants/form-constants";

export default {
  POPULATE_SEARCH_RESULTS(state, restaurants) {
    let viewingRestaurant = restaurants.shift();

    state.restaurantList = restaurants;
    state.viewingRestaurant = Object.assign({}, viewingRestaurant);
    // populate list and set the first one as viewing
  },

  DISPLAY_NEXT_RESTAURANT(state) {
    // get head of list, unshift the list
    // check if the list is empty
    // if not empty then assign to viewingRestaurant
    // toggle the reject alert box
    let nextRestaurant = state.restaurantList.shift();

    state.viewingRestaurant = Object.assign({}, nextRestaurant);
  },

  CLEAR_FETCHED_RESULTS(state) {
    let restaurantListLength = state.restaurantList.length;
    state.restaurantList = state.restaurantList.splice(0, restaurantListLength);

    for (let key in state.viewingRestaurant) {
      delete state.viewingRestaurant[key];
    }
  }
};
