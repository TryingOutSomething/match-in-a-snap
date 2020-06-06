import { FETCH_RESTAURANTS as fetchRestaurants } from "@/services/mock-api";

export default {
  SEARCH_RESTAURANTS({ commit }, userPreference) {
    return new Promise((resolve, reject) => {
      localStorage.setItem("userPreference", JSON.stringify(userPreference));

      commit("SET_LOADING_FORM_STATUS", null, { root: true });

      fetchRestaurants()
        .then(response => {
          commit("POPULATE_SEARCH_RESULTS", response);
          // change to result status

          commit("SET_RESULT_FORM_STATUS", null, { root: true });

          resolve();
        })
        .catch(err => reject(err));
    });
  },

  RESET_SEARCH_RESULTS({ commit }) {
    // commit("CLEAR_FETCHED_RESULTS");
    commit("SET_EDITING_FORM_STATUS", null, { root: true });
  }
};
