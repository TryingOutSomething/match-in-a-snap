<template>
  <v-container>
    <v-form ref="user-preference">
      <v-row justify="center">
        <v-col class="pb-0 pt-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">Enter your</v-card-text>
        </v-col>
        <v-col class="pb-0" sm="11" cols="11">
          <v-text-field
            class="mb-0"
            label="Postal Code"
            dense
            outlined
            clearable
            autofocus
            type="number"
            :color="inputBorderFocusColour"
            v-model="userPreference.postalCode"
          ></v-text-field>
        </v-col>
        <v-col class="pt-0 mt-n5" sm="11" cols="11">
          <v-row class="mb-n10">
            <v-col class="pt-2">
              <v-text-field
                label="Age"
                dense
                outlined
                clearable
                :color="inputBorderFocusColour"
                v-model="userPreference.age"
              ></v-text-field>
            </v-col>
            <v-col class="pt-2">
              <v-select
                :items="genderList"
                label="Gender"
                dense
                outlined
                :color="inputBorderFocusColour"
                v-model="userPreference.gender"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">I'm having</v-card-text>
        </v-col>
        <v-col sm="10" cols="12">
          <v-row justify="center">
            <v-chip-group
              multiple
              column
              :active-class="chipSelectedColour"
              v-model="userPreference.mealChoice"
            >
              <v-chip
                class="mx-4 my-2 px-5"
                v-for="choice in meals"
                :value="choice"
                :key="choice"
              >
                {{ choice }}
              </v-chip>
            </v-chip-group>
          </v-row>
        </v-col>

        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">I prefer</v-card-text>
        </v-col>
        <v-col sm="10" cols="12" class="ml-10">
          <v-row justify="center">
            <v-chip-group
              multiple
              column
              :active-class="chipSelectedColour"
              v-model="userPreference.dietaryChoice"
            >
              <v-chip
                class="mx-4 my-2 px-5"
                v-for="option in dietaryOptions"
                :value="option"
                :key="option"
              >
                {{ option }}
              </v-chip>
            </v-chip-group>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center">
        <v-btn
          class="mt-4 mb-6 pa-7"
          large
          color="#FFDF10"
          @click="searchRestaurants"
          >Surprise Me!</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
import {
  INPUT_FOCUS_BORDER_COLOUR,
  SELECTED_CHIP_COLOUR
} from "@/constants/form-constants";

export default {
  name: "UserPreference",
  data: () => ({
    genderList: ["Male", "Female"],
    meals: ["Breakfast", "Lunch", "Dinner"],
    dietaryOptions: [
      "Vegetarian",
      "Non beef",
      "No Spicy",
      "Halal",
      "Pescatarian",
      "Gluten-Free"
    ],
    inputBorderFocusColour: INPUT_FOCUS_BORDER_COLOUR,
    chipSelectedColour: SELECTED_CHIP_COLOUR,

    userPreference: {}
  }),

  methods: {
    searchRestaurants() {
      this.$store
        .dispatch("find-restaurants/SEARCH_RESTAURANTS", this.userPreference)
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.v-chip {
  border-radius: 5px;
  width: 120px;
  display: flex;
  justify-content: center;
}

.v-chip-group--column .v-slide-group__content {
  justify-content: center;
}

.v-btn {
  border-radius: 6px;
}
</style>
