<template>
  <v-container>
    <v-card class="mx-auto mt-12" width="600px" height="821px" elevation="3">
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

      <user-preference />
      <!-- <alert-box /> -->
    </v-card>

    <footer-base></footer-base>
  </v-container>
</template>

<script>
import FooterBase from "@/components/core/Footer";
import UserPreference from "@/components/UserPreference";
import AlertBox from "@/components/core/AlertBox";

export default {
  name: "Form",
  components: {
    FooterBase,
    UserPreference,
    AlertBox
  },

  data: () => ({
    genderList: ["Male", "Female"],
    gender: "Male",
    meals: ["Breakfast", "Lunch", "Dinner"],
    dietaryOptions: [
      "Vegetarian",
      "Non beef",
      "No Spicy",
      "Halal",
      "Pescatarian",
      "Gluten-Free"
    ]
  })
};
</script>

<style scoped></style>
