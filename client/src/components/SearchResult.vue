<template>
  <v-container>
    <v-img :src="imageUrl" width="600px" height="300px"></v-img>

    <v-row>
      <v-col class="pt-2">
        <v-card-subtitle class="pa-0">
          Image source: {{ imageUrl }}
        </v-card-subtitle>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <v-col>
          <h2 class="font-weight-regular">Gubergren.</h2>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col sm="1" cols="1">
          <v-icon color="grey darken-4">mdi-clock-outline</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            Dolore voluptua clita dolor labore et nonumy magna ut dolore,.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="1" cols="1">
          <v-icon color="grey darken-4">mdi-phone</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            Dolore voluptua clita dolor labore et nonumy magna ut dolore,.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="1" cols="1">
          <v-icon color="grey darken-4">mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            Dolore voluptua clita dolor labore et nonumy magna ut dolore,.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="1" cols="1">
          <v-icon color="grey darken-4">mdi-web</v-icon>
        </v-col>
        <v-col>
          <a href="#" target="_blank" class="mb-0">
            Dolore voluptua clita dolor labore et nonumy magna ut dolore,.
          </a>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="1" cols="1">
          <v-icon color="grey darken-4">mdi-moped</v-icon>
        </v-col>
        <v-col>
          <p class="mb-0">
            Dolore voluptua clita dolor labore et nonumy magna ut dolore,.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="3" cols="3" class="pb-0">
          <v-img :src="snapeeLogo" max-width="100px" max-height="100px"></v-img>
        </v-col>

        <v-col class="pb-0">
          <v-row justify="end">
            <v-btn class="ma-4 px-5" color="#FFD966">
              Next Choice
            </v-btn>
            <v-btn class="ma-4 px-10" color="#FFDF10">I Like!</v-btn>
          </v-row>
          <v-row justify="end">
            <v-btn
              text
              class="font-italic font-weight-regular text-capitalize lighter"
            >
              Change Postal Code / Preference
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "SearchResult",
  data: () => ({
    imageUrl:
      "https://static.rootsrated.com/image/upload/s--LbVVifxy--/t_rr_large_natural/a582hei6yo6itc6fvdjl.jpg",

    snapeeLogo: require("@/assets/snapee-logo.png")
  })
};
</script>

<style scoped>
.v-btn {
  border-radius: 6px;
}
.lighter {
  color: #616161;
}
</style>
