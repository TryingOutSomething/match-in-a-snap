<template>
  <v-dialog v-model="dialog" width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        Enjoy Your Meal!
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-btn class="ma-4 px-5" color="#FFD966" @click="returnToForm">
          Next Location
        </v-btn>
        <v-btn class="ma-4 px-5" color="#FFDF10">Feedback</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AcceptAlertBox",

  computed: {
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
    ...mapActions("find-restaurants", ["RESET_SEARCH_RESULTS"]),

    returnToForm() {
      this.dialog = false;
      this.RESET_SEARCH_RESULTS();
    }
  }
};
</script>

<style scoped>
.v-btn {
  border-radius: 6px;
}
</style>
