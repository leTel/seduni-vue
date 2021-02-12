<template>
  <v-row class="my-5">
    <v-col>
      <h1 class="text-center text-uppercase font-weight-regular">
        <v-icon left x-large color="primary" class="mr-5">
          {{ icon }}
        </v-icon>
        {{ title }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
