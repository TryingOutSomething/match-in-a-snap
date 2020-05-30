<template>
  <v-content>
    <v-app id="home-view">
      <router-view />
    </v-app>
  </v-content>
</template>

<script>
export default {
  name: "Home",
  metaInfo() {
    return {
      title: "Match-In-A-Snap"
    };
  }
};
</script>

<style>
#home-view {
  background: linear-gradient(
    to bottom,
    #dae3f3 0%,
    #dae3f3 30%,
    #ffffff 30%,
    #ffffff 100%
  );
}
</style>
