<template>
  <v-container>
    <snackbar
      v-model="snackSettings.isVisible"
      :colour="snackSettings.colour"
      :text="snackSettings.text"
    />

    <v-form ref="user-preference">
      <v-row justify="center">
        <v-col class="pb-0 pt-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">Enter your</v-card-text>
        </v-col>
        <v-col class="pb-0" sm="11" cols="11">
          <base-text-field
            :colour="inputBorderFocusColour"
            label="Postal Code"
            :validations="[validation.required]"
            v-model="userPreference.postalCode"
          />
        </v-col>
        <v-col class="pt-0 mt-n4" sm="11" cols="11">
          <v-row class="mb-n10">
            <v-col class="pt-2">
              <base-text-field
                :colour="inputBorderFocusColour"
                label="Age"
                :validations="[validation.required]"
                v-model="userPreference.age"
              />
            </v-col>
            <v-col class="pt-2">
              <v-select
                :items="genderList"
                label="Gender"
                dense
                outlined
                :color="inputBorderFocusColour"
                :rules="[validation.required]"
                v-model="userPreference.gender"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

      </v-row>

      <v-row justify="center">
        <v-col class="pb-0" cols="11" sm="11">
          <v-card-text class="pb-1 font-italic">I'm having</v-card-text>
        </v-col>
        <v-col cols="6" sm="10">
          <v-row justify="center">
            <v-chip-group
              column
              :active-class="chipSelectedColour"
              v-model="userPreference.mealChoice"
            >
              <v-row justify="center">
                <v-chip
                  :key="choice"
                  :value="choice.toLowerCase()"
                  class="mx-4 my-2 px-5"
                  v-for="choice in meals"
                >
                  {{ choice }}
                </v-chip>
              </v-row>
            </v-chip-group>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col class="pb-0" sm="11" cols="11">
          <v-card-text class="pb-1 font-italic">I prefer</v-card-text>
        </v-col>
        <v-col cols="12" sm="10">
          <v-row justify="center">
            <v-chip-group
              multiple
              column
              :active-class="chipSelectedColour"
              v-model="userPreference.dietaryOptions"
            >
              <v-row justify="center">
                <v-chip
                  :key="option"
                  :value="option"
                  class="mx-4 my-2 px-5"
                  v-for="option in dietaryOptions"
                >
                  {{ option }}
                </v-chip>
              </v-row>
            </v-chip-group>
          </v-row>
        </v-col>
      </v-row>

      <v-card-actions class="justify-center">
        <v-btn
          class="mt-4 mb-6 pa-7"
          large
          :color="primaryButtonColour"
          @click="searchRestaurants"
        >
          Surprise Me!
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-container>
</template>

<script>
  import { mapMutations, mapState } from 'vuex';
  import Snackbar from '@/components/core/Snackbar';
  import * as formConstants from '@/constants/form-constants';
  import * as validationUtil from '@/utils/validation';
  import { persistUserPreference } from '@/utils/local-storage';
  import BaseTextField from '@/components/core/BaseTextField';

  export default {
    name: 'UserPreference',
    components: {
      BaseTextField,
      Snackbar
    },

    data: () => ({
      genderList: formConstants.GENDER_OPTIONS,
      meals: formConstants.MEAL_OPTIONS,
      dietaryOptions: formConstants.DIETARY_OPTIONS,
      inputBorderFocusColour: formConstants.INPUT_FOCUS_BORDER_COLOUR,
      chipSelectedColour: formConstants.SELECTED_CHIP_COLOUR,

      validation: { required: validationUtil.requiredField },

      primaryButtonColour: formConstants.BUTTON_COLOUR_PRIMARY
    }),

    computed: {
      ...mapState(['snackSettings']),
      ...mapState('find-restaurants', ['restaurantListPage', 'userPreference'])
    },

    methods: {
      ...mapMutations(['TOGGLE_ERROR_ALERT_BOX', 'TOGGLE_ERROR_NOTIFICATION']),

      searchRestaurants() {
        if (this.isInvalidForm()) {
          return;
        }

        this.userPreference.currentPage = formConstants.DEFAULT_PAGE_NO;
        persistUserPreference(this.userPreference);

        this.$store
            .dispatch('find-restaurants/SEARCH_RESTAURANTS', this.userPreference)
            .catch(err => {
              console.log(err);
              this.TOGGLE_ERROR_ALERT_BOX();
            });
      },

      isInvalidForm() {
        if (validationUtil.isIncompleteForm(this.userPreference)) {
          this.TOGGLE_ERROR_NOTIFICATION('Fields and options cannot be empty!');
          return true;
        }

        if (validationUtil.isInvalidPostalCode(this.userPreference.postalCode)) {
          this.TOGGLE_ERROR_NOTIFICATION('Postal code must be exactly 6 digits!');
          return true;
        }

        if (validationUtil.isInvalidAge(this.userPreference.age)) {
          this.TOGGLE_ERROR_NOTIFICATION('Invalid age!');
          return true;
        }

        return false;
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
