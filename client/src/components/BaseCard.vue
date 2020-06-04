<template>
  <v-container>
    <v-card class="mx-auto mt-12" width="600px" elevation="3">
      <!-- <base-form /> -->
      <search-result />
      <!-- <alert-box /> -->
    </v-card>
    <footer-base />
  </v-container>
</template>

<script>
import AlertBox from "@/components/core/AlertBox";
import BaseForm from "@/components/BaseForm";
import FooterBase from "@/components/core/Footer";
import SearchResult from "@/components/SearchResult";

export default {
  name: "Form",
  components: {
    AlertBox,
    BaseForm,
    FooterBase,
    SearchResult
  }
};
</script>

<style scoped></style>
