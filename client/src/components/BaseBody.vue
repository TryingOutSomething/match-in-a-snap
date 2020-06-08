<template>
  <v-container>
    <base-form v-show="!showingResults" />
    <search-result v-show="showingResults" />
    <footer-base />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import FooterBase from "@/components/core/Footer";
import { EDITING_STATUS, RESULT_STATUS } from "@/constants/form-constants";

export default {
  name: "BaseBody",
  components: {
    FooterBase
  },

  computed: {
    ...mapState(["formStatus"]),

    showingResults() {
      return this.formStatus === RESULT_STATUS;
    }
  }
};
</script>

<style scoped></style>
