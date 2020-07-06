<template>
  <v-dialog v-model="dialog" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        I would like to
      </v-card-title>

      <v-card-actions>
        <v-row class="mx-0 mb-3" justify="center">
          <v-btn :color="secondaryColour" @click="fetchMoreRestaurants" class="ma-4 px-5">
            View more choices
          </v-btn>
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
  import { BUTTON_COLOUR_PRIMARY, BUTTON_COLOUR_SECONDARY } from '@/constants/form-constants';


  export default {
    name: 'RejectAlertBox',
    data: () => ({
      primaryColour: BUTTON_COLOUR_PRIMARY,
      secondaryColour: BUTTON_COLOUR_SECONDARY
    }),

    computed: {
      ...mapState('find-restaurants', ['userPreference', 'viewingRestaurant']),

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
      ...mapMutations(['TOGGLE_ERROR_ALERT_BOX']),

      returnToForm() {
        this.dialog = false;
        this.RESET_SEARCH_RESULTS();
      },

      fetchMoreRestaurants() {
        this.userPreference.currentPage++;
        this.dialog = false;

        this.$store
            .dispatch('find-restaurants/SEARCH_RESTAURANTS', this.userPreference)
            .catch(err => {
              console.log(err);
              this.TOGGLE_ERROR_ALERT_BOX();
            });
      }
    }
  };
</script>

<style scoped>
  .v-btn {
    border-radius: 6px;
  }
</style>
