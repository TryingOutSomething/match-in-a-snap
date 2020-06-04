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
            :color="inputBorderFocusColour"
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
              ></v-text-field>
            </v-col>
            <v-col class="pt-2">
              <v-select
                v-model="gender"
                :items="genderList"
                label="Gender"
                dense
                outlined
                :color="inputBorderFocusColour"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">I'm having</v-card-text>
        </v-col>
        <v-col sm="10" cols="12">
          <v-row justify="center">
            <v-chip-group multiple column :active-class="chipSelectedColour">
              <v-chip
                class="mx-4 my-2 px-5"
                v-for="choice in meals"
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
            <v-chip-group multiple column :active-class="chipSelectedColour">
              <v-chip
                class="mx-4 my-2 px-5"
                v-for="option in dietaryOptions"
                :key="option"
              >
                {{ option }}
              </v-chip>
            </v-chip-group>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center">
        <v-btn class="mt-4 mb-6 pa-7" large color="#FFDF10">Surprise Me!</v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "UserPreference",
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
    ],
    inputBorderFocusColour: "yellow darken-3",
    chipSelectedColour: "yellow--text text--darken-4"
  })
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
