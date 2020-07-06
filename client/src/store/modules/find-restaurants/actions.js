import api from '@/services/api';

export default {
  SEARCH_RESTAURANTS({ commit }, userPreference) {
    return new Promise((resolve, reject) => {
      commit('SET_LOADING_FORM_STATUS', null, { root: true });

      api.getNearbyRestaurants(userPreference)
         .then(response => {
           let restaurantList = response.data;

           if (restaurantList.length <= 0) {
             return reject('No restaurants from response');
           }

           commit('POPULATE_SEARCH_RESULTS', response.data);
           commit('SET_RESULT_FORM_STATUS', null, { root: true });

           resolve();
         })
         .catch(err => reject(err.response.data));
    });
  },

  RESET_SEARCH_RESULTS({ commit }) {
    commit('CLEAR_FETCHED_RESULTS');
    commit('SET_EDITING_FORM_STATUS', null, { root: true });
  }
};
