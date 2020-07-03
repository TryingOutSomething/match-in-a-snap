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
  import { mapActions } from 'vuex';
  import { FEEDBACK_URL } from '@/constants/url-constants';

  export default {
    name: 'AcceptAlertBox',
    data: () => ({
      feedbackFormUrl: FEEDBACK_URL
    }),

    computed: {
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
        this.RESET_SEARCH_RESULTS();
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
