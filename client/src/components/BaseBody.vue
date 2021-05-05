<template>
  <v-container>
    <v-card class="mx-auto mt-12" width="600px" elevation="3">
      <base-form v-show="!showingResults"/>
      <search-result v-show="showingResults"/>
      <disclaimer-alert-box v-model="showDialog"/>
      <error-alert-box/>
    </v-card>
    <footer-base/>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import FooterBase from '@/components/core/Footer';
import { RESULT_STATUS } from '@/constants/form-constants';
import ErrorAlertBox from './core/ErrorAlertBox';
import DisclaimerAlertBox from './core/DisclaimerAlertBox';

export default {
  name: 'BaseBody',
  components: {
    DisclaimerAlertBox,
    ErrorAlertBox,
    FooterBase
  },

  data() {
    return {
      showDialog: true
    }
  },

  computed: {
    ...mapState(['formStatus']),

    showingResults() {
      return this.formStatus === RESULT_STATUS;
    }
  }
};
</script>
