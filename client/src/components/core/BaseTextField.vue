<template>
  <v-text-field
    :color="colour"
    :label="label"
    :rules="validations"
    class="mb-0"
    clearable
    dense
    outlined
    type="number"
    v-bind="$attrs"
    v-on="$listeners"
  ></v-text-field>
</template>

<script>
  export default {
    name: 'BaseTextField',
    props: {
      colour: {
        type: String,
        required: true
      },

      label: {
        type: String,
        required: true
      },

      validations: {
        type: Array
      },
    }
  };
</script>

<style scoped>

</style>
