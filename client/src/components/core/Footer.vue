<template>
  <v-footer id="core-footer" absolute color="#ffffff" height="40%">
    <v-row justify="center">
      <span v-for="(link, index) in links" :key="link.name">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
        <span class="mr-1" v-if="index != links.length - 1"> | </span>
      </span>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    links: [
      { name: "Terms of use", url: `${window.location.href}terms` },
      { name: "Instagram", url: "https://www.instagram.com/snapee.co/" },
      { name: "Facebook", url: "https://www.facebook.com/snapee.co/" },
      { name: "Website", url: "https://www.snapee.co/" },
      { name: "Feedback", url: "#" }
    ]
  })
};
</script>

<style scoped>
.v-application a {
  color: #616161;
}
</style>
