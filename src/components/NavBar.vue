<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link :to="{ name: 'home' }">
        <v-img
          :src="require('@/assets/img/logo.png')"
          max-height="50"
          max-width="50"
          contain
        />
      </router-link>

      <v-toolbar-title class="mr-5">
        <router-link
          :to="{ name: 'home' }"
          style="color: black; text-decoration: none;"
        >
          SEDUNI
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="300" temporary app>
      <v-list nav>
        <v-list-item-group class="d-flex justify-center">
          <v-img
            :src="require('@/assets/img/logo.png')"
            max-height="70px"
            max-width="70px"
            contain
          />
          <h1 class="font-weight-regular mt-3 mb-5">
            SEDUNI
          </h1>
        </v-list-item-group>

        <v-divider></v-divider>

        <v-list-item-group>
          <menu-list-item :key="homeLink.to" :link="homeLink" />
        </v-list-item-group>

        <v-divider></v-divider>

        <v-list-item-group>
          <menu-list-item
            v-for="link in primaryLinks"
            :key="link.to"
            :link="link"
          />
        </v-list-item-group>

        <v-divider></v-divider>

        <v-list-item-group>
          <menu-list-item
            v-for="link in secondaryLinks"
            :key="link.to"
            :link="link"
          />
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem.vue'

export default {
  components: {
    MenuListItem
  },
  data() {
    return {
      drawer: false,
      homeLink: this.$store.getters.homePage,
      primaryLinks: this.$store.getters.primaryPages,
      secondaryLinks: this.$store.getters.secondaryPages
    }
  }
}
</script>
