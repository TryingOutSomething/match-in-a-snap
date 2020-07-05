<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-title class="pt-5 justify-center font-weight-regular form-title">
          MATCH IN A SNAP!
        </v-card-title>
        <v-card-subtitle class="font-italic text-center">
          By Snapee
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="text-center mb-0 font-italic font-weight-light">
          Not sure what to eat?
        </p>
        <p class="text-center mt-0 font-italic font-weight-light">
          Let us recommend a tasty meal for you!
        </p>
      </v-col>
    </v-row>

    <v-divider/>

    <user-preference v-show="requireUserInput"/>
    <loading-screen v-if="isFetchingResults"/>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import LoadingScreen from '@/components/form-components/LoadingScreen';
  import UserPreference from '@/components/form-components/UserPreference';
  import { EDITING_STATUS, LOADING_STATUS } from '@/constants/form-constants';

  export default {
    name: 'Form',
    components: {
      LoadingScreen,
      UserPreference
    },

    computed: {
      ...mapState(['formStatus']),

      requireUserInput() {
        return this.formStatus === EDITING_STATUS;
      },

      isFetchingResults() {
        return this.formStatus === LOADING_STATUS;
      }
    }
  };
</script>

<style scoped>
  @media only screen and (min-width: 400px) {
    .form-title {
      font-size: xx-large;
    }
  }

  @media only screen and (max-width: 400px) {
    .form-title {
      font-size: x-large;
    }
  }
</style>
