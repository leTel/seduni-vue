<template>
  <v-app>
    <nav-bar />

    <v-main id="main">
      <router-view :key="$route.fullPath" />
    </v-main>

    <v-footer app>
      Tous droits réservés SEDUNI @2021
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

  components: { NavBar },

  data: () => ({
    //
  })
}
</script>

<style></style>
