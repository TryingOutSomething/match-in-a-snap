<template>
  <v-container>
    <v-img :lazy-src="loadingImage" :src="hasImageUrl" height="250px" width="600px">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-row>
      <v-col class="pt-2">
        <v-card-subtitle class="pa-0 image-src">
          Image source: {{ viewingRestaurant.imageUrl || 'No image available' }}
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          <h2 class="font-weight-regular">{{ viewingRestaurant.name }}</h2>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col align-self="center" cols="2" sm="1">
          <v-icon color="grey darken-4">mdi-clock-outline</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            {{ viewingRestaurant.businessHours }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col align-self="center" cols="2" sm="1">
          <v-icon color="grey darken-4">mdi-phone</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            {{ viewingRestaurant.phone }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col align-self="center" cols="2" sm="1">
          <v-icon color="grey darken-4">mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            {{ viewingRestaurant.address }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col align-self="center" cols="2" sm="1">
          <v-icon color="grey darken-4">mdi-web</v-icon>
        </v-col>
        <v-col>
          <a :href="viewingRestaurant.website" class="mb-0" target="_blank" v-if="isValidWebsite">
            {{ viewingRestaurant.website }}
          </a>

          <p class="mb-0" v-else>{{ viewingRestaurant.website }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col align-self="center" cols="2" sm="1">
          <v-icon color="grey darken-4">mdi-moped</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            {{ viewingRestaurant.deliveryOptions }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-row>
          <v-col class="pa-0">
            <v-img :src="snapeeLogo" max-height="100px" max-width="100px"></v-img>
          </v-col>

          <v-row align="center" justify="end">
            <v-btn
              class="mr-4"
              :color="secondaryColour"
              @click="getNextRestaurant"
            >
              Next Choice
            </v-btn>
            <v-btn
              class="ml-4 mr-8 px-10"
              :color="primaryColour"
              @click="toggleAcceptAlertModal = true"
            >
              I Like!
            </v-btn>
          </v-row>
        </v-row>

        <v-row class="mx-0 pt-1" justify="end">
          <v-btn
            @click="RESET_SEARCH_RESULTS"
            class="font-italic font-weight-regular text-capitalize lighter"
            text
          >
            Change Postal Code / Preferences
          </v-btn>
        </v-row>
      </v-row>
    </v-container>

    <accept-alert v-model="toggleAcceptAlertModal"/>
    <reject-alert v-model="toggleRejectAlertModal"/>
  </v-container>
</template>

<script>
  import AcceptAlert from '@/components/form-components/AcceptAlert';
  import RejectAlert from '@/components/form-components/RejectAlert';
  import { mapActions, mapMutations, mapState } from 'vuex';
  import { BUTTON_COLOUR_PRIMARY, BUTTON_COLOUR_SECONDARY } from '@/constants/form-constants';


  export default {
    name: 'SearchResult',
    components: {
      AcceptAlert,
      RejectAlert
    },

    data: () => ({
      placeholderImage: require('@/assets/placeholder.jpg'),
      loadingImage: 'https://picsum.photos/id/11/100/60',
      snapeeLogo: require('@/assets/snapee-logo-no-text.png'),

      toggleAcceptAlertModal: false,
      toggleRejectAlertModal: false,

      primaryColour: BUTTON_COLOUR_PRIMARY,
      secondaryColour: BUTTON_COLOUR_SECONDARY
    }),

    computed: {
      ...mapState('find-restaurants', ['viewingRestaurant']),

      isValidWebsite() {
        return this.viewingRestaurant.website !== 'No website information';
      },

      hasImageUrl() {
        return this.viewingRestaurant.imageUrl || this.placeholderImage;
      }
    },

    methods: {
      ...mapActions('find-restaurants', ['RESET_SEARCH_RESULTS']),
      ...mapMutations('find-restaurants', ['DISPLAY_NEXT_RESTAURANT']),

      getNextRestaurant() {
        let restaurantListLength = this.$store.getters['find-restaurants/restaurantListLength'];

        if (restaurantListLength <= 0) {
          this.toggleRejectAlertModal = true;

          return;
        }

        this.DISPLAY_NEXT_RESTAURANT();
      }
    }
  };
</script>

<style scoped>
  .v-btn {
    border-radius: 6px;
  }

  .lighter {
    color: #616161;
  }

  @media only screen and (max-width: 400px) {
    .image-src {
      font-size: x-small;
    }
  }
</style>
