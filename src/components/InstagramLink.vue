<template>
  <div>
    <v-hover v-slot:default="{ hover }">
      <v-btn
        :elevation="hover ? 8 : 2"
        text
        href="https://www.instagram.com/seduni.vs/"
        target="_blank"
      >
        <slot></slot>
        <v-icon color="#d6249f" class="ml-5" right large>mdi-instagram</v-icon>
      </v-btn>
    </v-hover>
  </div>
</template>

<style scoped>
.theme--light.v-btn:hover::before {
  opacity: 0;
}
</style>
