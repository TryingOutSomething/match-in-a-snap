import api from '@/services/api';

export default {
  SEARCH_RESTAURANTS({ commit }, userPreference) {
    return new Promise((resolve, reject) => {
      commit('SET_LOADING_FORM_STATUS', null, { root: true });

      api.getNearbyRestaurants(userPreference)
         .then(response => {
           let restaurantList = response.data;

           if (restaurantList.length <= 0) {
             commit('TOGGLE_ERROR_ALERT_BOX', null, { root: true });
             return reject('No restaurants from response');
           }

           commit('POPULATE_SEARCH_RESULTS', response.data);
           // change to result status

           commit('SET_RESULT_FORM_STATUS', null, { root: true });

           resolve();
         })
         .catch(err => {
           commit('TOGGLE_ERROR_ALERT_BOX', null, { root: true });
           reject(err.response.data);
         });
    });
  },

  RESET_SEARCH_RESULTS({ commit }) {
    // commit("CLEAR_FETCHED_RESULTS");
    commit('SET_EDITING_FORM_STATUS', null, { root: true });
  }
};
