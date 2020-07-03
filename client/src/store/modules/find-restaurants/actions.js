import api from '@/services/api';

export default {
  SEARCH_RESTAURANTS({ commit }, userPreference) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("userPreference", JSON.stringify(userPreference));

      commit("SET_LOADING_FORM_STATUS", null, { root: true });

      api.getNearbyRestaurants(userPreference)
         .then(response => {
           commit('POPULATE_SEARCH_RESULTS', response.data);
           // change to result status

           commit('SET_RESULT_FORM_STATUS', null, { root: true });

           resolve();
         })
         .catch(err => reject(err.response.data));
    });
  },

  RESET_SEARCH_RESULTS({ commit }) {
    // commit("CLEAR_FETCHED_RESULTS");
    commit("SET_EDITING_FORM_STATUS", null, { root: true });
  }
};
