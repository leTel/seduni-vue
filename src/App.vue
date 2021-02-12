<template>
  <v-app>
    <nav-bar />

    <v-main id="main">
      <transition name="fade" mode="out-in">
        <router-view :key="$route.fullPath" />
      </transition>
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

  components: { NavBar },

  data: () => ({
    //
  })
}
</script>

<style scoped>
.fade-leave-active {
  transition-delay: 0.1s;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
