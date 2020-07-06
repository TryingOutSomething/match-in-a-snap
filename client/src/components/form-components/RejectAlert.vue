<template>
  <v-dialog v-model="dialog" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        I would like to
      </v-card-title>

      <v-card-actions>
        <v-row class="mx-0 mb-3" justify="center">
          <v-btn @click="fetchMoreRestaurants" class="ma-4 px-5" color="#FFD966">
            View more choices
          </v-btn>
          <v-btn @click="returnToForm" class="ma-4 px-5" color="#FFDF10">
            Change preferences
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mapActions, mapMutations, mapState } from 'vuex';

  export default {
    name: 'RejectAlertBox',

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
