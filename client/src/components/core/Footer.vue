<template>
  <v-footer id="core-footer" absolute color="#ffffff" height="40%">
    <v-row justify="center">
      <span v-for="(link, index) in links" :key="link.name">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
        <span class="mr-1" v-if="index !== links.length - 1"> | </span>
      </span>
    </v-row>
  </v-footer>
</template>

<script>
  import * as urls from '@/constants/url-constants';

  export default {
    name: 'Footer',

    data: () => ({
      links: [
        { name: 'Terms of use', url: `${window.location.href}terms` },
        { name: 'Instagram', url: urls.INSTAGRAM_URL },
        { name: 'Facebook', url: urls.FACEBOOK_URL },
        { name: 'Website', url: urls.WEBSITE_URL },
        { name: 'Feedback', url: urls.FEEDBACK_URL }
      ]
    })
  };
</script>

<style scoped>
  .v-application a {
    color: #616161;
  }
</style>
