<template>
  <v-app>
    <nav-bar />

    <v-main id="main">
      <router-view :key="$route.fullPath" />
    </v-main>

    <v-footer app padless>
      <v-row>
        <v-col>
          <span class="text-caption small ml-1">
            © {{ new Date().getFullYear() }} SEDUNI
          </span>
        </v-col>
        <v-col class="text-right text-md-left ">
          <v-btn
            text
            icon
            color="#3b5998"
            href="https://www.facebook.com/SEDUNI.VS"
            target="_blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            text
            icon
            color="#d6249f"
            href="https://www.instagram.com/seduni.vs/"
            target="_blank"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
