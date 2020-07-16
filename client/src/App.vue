<template>
  <main>
    <router-view/>
  </main>
</template>

<script>
  export default {
    name: 'App',
    metaInfo() {
      return {
        title: 'Match-In-A-Snap',
        meta: [
          { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
          { name: 'description', content: 'Not sure what to eat? We\'re here to help!' },
          { rel: 'canonical', href: 'https://www.eatwhatsia.com' },
          { name: 'twitter:card', content: 'Not sure what to eat? We\'re here to help!' },
          { name: 'twitter:site', content: 'https://www.eatwhatsia.com' },
          { name: 'twitter:title', content: 'Match In A Snap!' },
          {
            name: 'twitter:description',
            content: 'Tired of asking what to eat? Let us recommend you a place instead!'
          },
          { name: 'twitter:image:src', content: 'https://www.eatwhatsia.com/img/snapee-logo-no-text.40af379f.png' },
          { property: 'og:title', content: 'Match In A Snap!' },
          { property: 'og:site_name', content: 'Match In A Snap!' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://www.eatwhatsia.com' },
          { property: 'og:image', content: 'https://www.eatwhatsia.com/img/snapee-logo-no-text.40af379f.png' },
          { property: 'og:description', content: 'Not sure what to eat? We\'re here to help!' },
          { itemprop: 'name', content: 'Match In A Snap!' },
          { itemprop: 'description', content: 'Not sure what to eat? We\'re here to help!' },
          { itemprop: 'image', content: 'https://www.eatwhatsia.com/img/snapee-logo-no-text.40af379f.png' }
        ]
      };
    }
  };
</script>

<style></style>
