<template>
  <v-dialog persistent v-model="errorDuringHttpRequest" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular alert-title">
        Oops!
      </v-card-title>

      <p class="pa-1 ma-0 text-center">No more available restaurants in this area.</p>

      <v-card-actions>
        <v-row class="mx-0 mb-3" justify="center">
          <v-btn :color="primaryColour" @click="returnToForm" class="ma-4 px-5">
            Change preferences
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';
  import { BUTTON_COLOUR_PRIMARY } from '@/constants/form-constants';

  export default {
    name: 'ErrorAlertBox',
    data: () => ({
      primaryColour: BUTTON_COLOUR_PRIMARY
    }),

    computed: {
      ...mapState(['errorDuringHttpRequest']),
    },

    methods: {
      ...mapActions('find-restaurants', ['RESET_SEARCH_RESULTS']),
      ...mapMutations(['TOGGLE_ERROR_ALERT_BOX']),

      returnToForm() {
        this.RESET_SEARCH_RESULTS();
        this.TOGGLE_ERROR_ALERT_BOX();
      },
    }

  };
</script>

<style scoped></style>
