// Global states that are shared across all components

import { EDITING_STATUS } from "@/constants/form-constants";

export default {
  formStatus: EDITING_STATUS,
  snackSettings: {
    colour: "",
    text: "",
    isVisible: false
  }
};
