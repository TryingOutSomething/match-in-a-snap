<template>
  <v-container>
    <v-row justify="center">
      <v-col class="pb-0 pt-0" sm="11" cols="11">
        <v-card-text class="pb-1">Enter your</v-card-text>
      </v-col>
      <v-col class="pb-0" sm="11" cols="11">
        <v-text-field class="mb-0" label="Postal Code" outlined></v-text-field>
      </v-col>
      <v-col class="pt-0 mt-n5" sm="11" cols="11">
        <v-row class="mb-n10">
          <v-col class="pt-0">
            <v-text-field label="Age" outlined></v-text-field>
          </v-col>
          <v-col class="pt-0">
            <v-select
              v-model="gender"
              :items="genderList"
              label="Gender"
              outlined
            ></v-select>
          </v-col>
        </v-row>
      </v-col>

      <v-col class="pb-0" sm="11" cols="11">
        <v-card-text>I'm having</v-card-text>
      </v-col>
      <v-col sm="11" cols="11">
        <v-row justify="center">
          <v-chip-group multiple column active-class="primary--text">
            <v-chip large outlined v-for="choice in meals" :key="choice">
              {{ choice }}
            </v-chip>
          </v-chip-group>
        </v-row>
      </v-col>

      <v-col class="pb-0" sm="11" cols="11">
        <v-card-text>I prefer</v-card-text>
      </v-col>
      <v-col sm="8" cols="8" class="ml-12">
        <v-chip-group multiple column active-class="primary--text">
          <v-chip
            outlined
            large
            class="width:300px"
            v-for="option in dietaryOptions"
            :key="option"
          >
            {{ option }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-card-actions class="justify-center">
      <v-btn class="mt-4 mb-6">Surprise Me!</v-btn>
    </v-card-actions>
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
    ]
  })
};
</script>

<style lang="scss" scoped></style>
