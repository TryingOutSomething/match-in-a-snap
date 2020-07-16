<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row justify="center" class="pa-12">
          <vue-loaders-ball-pulse
            color="#616161"
            scale="1"
          ></vue-loaders-ball-pulse>
        </v-row>

        <v-row justify="center">
          <v-col sm="8">
            <p class="display-1 text-center">
              We are searching for your tasty meal
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoadingScreen',
  metaInfo() {
    return {
      titleTemplate: '%s'
    };
  }
};
</script>

<style scoped></style>
