<template>
  <v-dialog v-model="dialog" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        I would like to
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-btn class="ma-4 px-5" color="#FFD966" @click="fetchMoreRestaurants">
          See next 10 choices
        </v-btn>
        <v-btn class="ma-4 px-5" color="#FFDF10" @click="returnToForm"
          >Change preferences</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "RejectAlertBox",

  computed: {
    ...mapState("find-restaurants", ["userPreference", "viewingRestaurant"]),

    dialog: {
      get() {
        return this.$attrs.value;
      },

      set(value) {
        this.$emit("input", value);
      }
    }
  },

  methods: {
    ...mapActions("find-restaurants", [
      "RESET_SEARCH_RESULTS",
      "SEARCH_RESTAURANTS"
    ]),

    returnToForm() {
      this.dialog = false;
      this.RESET_SEARCH_RESULTS();
    },

    fetchMoreRestaurants() {
      this.dialog = false;
      // Get id of viewing restaurant and add it to userPreference
      // this.SEARCH_RESTAURANTS(this.userPreference);
    }
  }
  // if response is empty, display no more results, ask them to go back to main page to change preferences
};
</script>

<style scoped>
.v-btn {
  border-radius: 6px;
}
</style>
