<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-btn
        :elevation="hover ? 8 : 2"
        text
        href="https://www.facebook.com/seduni.vs/"
        target="_blank"
      >
        <slot></slot>
        <v-icon color="#3b5998" right large>mdi-facebook</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>

<style scoped>
.theme--light.v-btn:hover::before {
  opacity: 0;
}
</style>
