import { FETCH_RESTAURANTS } from "@/services/mock-api";

export default {
  SEARCH_RESTAURANTS({ commit }, userPreference) {
    return new Promise((resolve, reject) => {
      // save to local storage
      // toggle loading status
      commit("SET_LOADING_FORM_STATUS", null, { root: true });

      FETCH_RESTAURANTS()
        .then(response => {
          commit("POPULATE_SEARCH_RESULTS", response);
          // change to result status

          commit("SET_RESULT_FORM_STATUS", null, { root: true });

          resolve();
        })
        .catch(err => err);
    });
  }
};
