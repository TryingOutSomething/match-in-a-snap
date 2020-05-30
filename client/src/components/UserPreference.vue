<template>
  <v-container>
    <v-card class="ma-12">
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

      <!-- shift to another component -->
      <v-row justify="center">
        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text>Enter your</v-card-text>
        </v-col>
        <v-col class="pb-0" sm="11" cols="11">
          <v-text-field label="Postal Code" outlined></v-text-field>
        </v-col>

        <v-col class="pt-0" sm="11" cols="11">
          <v-row class="mb-n10">
            <v-col>
              <v-text-field label="Age" outlined></v-text-field>
            </v-col>
            <v-col>
              <v-select
                :items="genderList"
                outlined
                v-model="gender"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text>I'm having</v-card-text>
        </v-col>
        <v-col sm="11" cols="11">
          <v-row class="justify-space-around">
            <!-- Change to chip ot button group -->
            <!-- <v-btn outlined>Breakfast</v-btn>
            <v-btn outlined>Lunch</v-btn>
            <v-btn outlined>Dinner</v-btn> -->
          </v-row>
        </v-col>

        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text>I prefer</v-card-text>
        </v-col>
        <v-col sm="11" cols="11">
          <!-- Change to chip ot button group -->
          <!-- <v-row class="justify-space-around">
            <v-btn width="100px" outlined>Halal</v-btn>
            <v-btn outlined>Vegetarian</v-btn>
            <v-btn outlined>Pescatarian</v-btn>
          </v-row>
          <v-row class="justify-space-around">
            <v-btn outlined>Gluten-Free</v-btn>
            <v-btn outlined>Non beef</v-btn>
            <v-btn outlined>No Spicy</v-btn>
          </v-row> -->
          <v-btn-toggle></v-btn-toggle>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center mt-3">
        <v-btn>Surprise Me!</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Form",

  data: () => ({
    genderList: ["Male", "Female"],
    gender: "Male"
  })
};
</script>
