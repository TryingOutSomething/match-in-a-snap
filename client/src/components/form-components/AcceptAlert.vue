<template>
  <v-dialog v-model="dialog" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        Enjoy Your Meal!
      </v-card-title>

      <v-card-actions>
        <v-row class="mx-0 mb-3" justify="center">
          <v-btn @click="returnToForm" class="ma-4 px-5" color="#FFD966">
            Next Location
          </v-btn>
          <v-btn @click="launchFeedbackFormUrl" class="ma-4 px-5" color="#FFDF10">Feedback</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import api from '@/services/api';
  import { mapActions, mapState } from 'vuex';
  import { FEEDBACK_URL } from '@/constants/url-constants';
  import { getUserPreference } from '@/utils/local-storage';

  export default {
    name: 'AcceptAlertBox',
    data: () => ({
      feedbackFormUrl: FEEDBACK_URL
    }),

    computed: {
      ...mapState('find-restaurants', ['viewingRestaurant']),

      dialog: {
        get() {
          return this.$attrs.value;
        },

        set(value) {
          this.$emit('input', value);
        }
      }
    },

    methods: {
      ...mapActions('find-restaurants', ['RESET_SEARCH_RESULTS']),

      returnToForm() {
        this.dialog = false;
        this.saveUserAcceptedChoice();
        this.RESET_SEARCH_RESULTS();
      },

      saveUserAcceptedChoice() {
        let confirmUserPreference = this.buildConfirmedUserPreference();

        api.saveUserChoice(confirmUserPreference).catch(err => console.log(err.response));
      },

      buildConfirmedUserPreference() {
        let { userId, postalCode, age, gender, mealChoice, dietaryOptions } = JSON.parse(getUserPreference());
        let { name: restaurantName, address } = this.viewingRestaurant;

        return {
          userId, postalCode, age, gender, mealChoice, dietaryOptions, restaurantName, address
        };
      },

      launchFeedbackFormUrl() {
        window.open(this.feedbackFormUrl, '_blank');
      }
    }
  };
</script>

<style scoped>
  .v-btn {
    border-radius: 6px;
  }
</style>
