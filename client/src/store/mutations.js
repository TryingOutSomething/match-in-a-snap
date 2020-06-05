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
  }
};
