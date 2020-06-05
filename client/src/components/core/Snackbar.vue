<template>
  <v-snackbar bottom :color="colour" :timeout="3000" v-model="visible">
    {{ text }}
    <v-btn text @click="CLOSE_SNACKBAR">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Snackbar",
  props: {
    text: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      required: true
    },
    value: {
      type: Boolean
    }
  },
  computed: {
    visible: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },

  methods: {
    ...mapMutations(["CLOSE_SNACKBAR"])
  }
};
</script>
