// Global mutations that are shared across all components
import * as formStatus from "@/constants/form-constants";

export default {
  SET_EDITING_FORM_STATUS(state) {
    state.formStatus = formStatus.EDITING_STATUS;
  },

  SET_LOADING_FORM_STATUS(state) {
    state.formStatus = formStatus.LOADING_STATUS;
  },
  SET_RESULT_FORM_STATUS(state) {
    state.formStatus = formStatus.RESULT_STATUS;
  },

  TOGGLE_ERROR_NOTIFICATION(state, message) {
    state.snackSettings.colour = "error";
    state.snackSettings.text = message;
    state.snackSettings.isVisible = true;
  },

  CLOSE_SNACKBAR(state) {
    state.snackSettings.isVisible = false;
  }
};
