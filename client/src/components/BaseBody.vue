<template>
  <v-container>
    <v-card class="mx-auto mt-12" width="600px" elevation="3">
      <base-form v-show="!showingResults"/>
      <search-result v-show="showingResults"/>
      <no-restaurants-alert/>
    </v-card>
    <footer-base/>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import FooterBase from '@/components/core/Footer';
  import NoRestaurantsAlert from '@/components/form-components/NoRestaurantsAlert';
  import { RESULT_STATUS } from '@/constants/form-constants';

  export default {
    name: 'BaseBody',
    components: {
      FooterBase,
      NoRestaurantsAlert,
    },

    computed: {
      ...mapState(['formStatus']),

      showingResults() {
        return this.formStatus === RESULT_STATUS;
      }
    }
  };
</script>

<style scoped></style>
