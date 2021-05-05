<template>
  <v-dialog persistent width="650" v-model="dialog">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular alert-title">
        Hello There!
      </v-card-title>

      <p class="pa-1 ma-0 text-center">
        This website demo operates on a fixed number of restaurants. Please visit the
        <a href="">git repository</a>
        to view the actual implementation of the project! Thanks you
      </p>

      <v-card-actions>
        <v-row class="mx-0 mb-3" justify="center">
          <v-btn :color="primaryColour" @click="closeModal" class="ma-4 px-5">
            Okay, got it!
          </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { BUTTON_COLOUR_PRIMARY } from '@/constants/form-constants';

export default {
  name: 'DisclaimerAlertBox',

  data() {
    return {
      repoUrl: 'https://github.com/TryingOutSomething/match-in-a-snap',
      primaryColour: BUTTON_COLOUR_PRIMARY
    };
  },

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
    closeModal() {
      this.dialog = false;
    }
  }
};
</script>

<style scoped>

</style>
