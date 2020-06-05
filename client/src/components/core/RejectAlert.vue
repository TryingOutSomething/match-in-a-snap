<template>
  <v-dialog v-model="dialog" persistent width="650px">
    <v-card>
      <v-card-title class="display-1 pt-10 justify-center font-weight-regular">
        I would like to
      </v-card-title>

      <v-card-actions class="justify-center">
        <v-btn class="ma-4 px-5" color="#FFD966">
          See next 10 choices
        </v-btn>
        <v-btn class="ma-4 px-5" color="#FFDF10">Change preferences</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "RejectAlertBox",
  data: () => ({
    dialog: true
  })
};
</script>

<style scoped>
.v-btn {
  border-radius: 6px;
}
</style>
