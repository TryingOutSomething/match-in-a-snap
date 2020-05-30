<template>
  <v-footer id="core-footer" absolute color="#ffffff">
    <!-- <div>
      <span v-for="(link, index) in links" :key="link.name">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
        <span v-if="index != links.length - 1"> | </span>
      </span>
    </div> -->
    <v-row class="mb-4" justify="center">
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
      { name: "Terms of use", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "Facebook", url: "#" },
      { name: "Website", url: "#" },
      { name: "Feedback", url: "#" }
    ]
  })
};
</script>

<style scoped>
a {
  color: #616161;
}
</style>
