<template>
  <v-app>
    <nav-bar />

    <v-main id="main">
      <router-view :key="$route.fullPath" />
    </v-main>

    <v-footer app>
      <span class="text-overline">Tous droits réservés SEDUNI @2021</span>
      <v-spacer />
      <v-btn
        text
        icon
        color="#3b5998"
        href="https://www.facebook.com/SEDUNI.VS"
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: { NavBar }
}
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
</style>
