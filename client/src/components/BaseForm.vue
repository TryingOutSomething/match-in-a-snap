<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card-title class="display-1 pt-5 justify-center">
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

    <v-divider></v-divider>

    <!-- <user-preference /> -->
    <loading-screen />
  </v-container>
</template>

<script>
import LoadingScreen from "@/components/form-components/LoadingScreen";
import UserPreference from "@/components/form-components/UserPreference";

export default {
  name: "Form",
  components: {
    LoadingScreen,
    UserPreference
  }
};
</script>

<style scoped></style>
