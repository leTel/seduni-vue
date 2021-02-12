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

      <v-toolbar-title class="mr-5">SEDUNI</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text small icon :to="{ name: 'login' }" class="mx-2">
        <v-icon color="primary">mdi-login</v-icon>
      </v-btn>
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
      homeLink: {
        title: 'Accueil',
        to: '/',
        icon: 'mdi-home-variant-outline'
      },
      primaryLinks: [
        {
          title: 'Histoire',
          to: 'history',
          icon: 'mdi-book-open-page-variant-outline'
        },
        {
          title: 'Artisanat',
          to: 'craft',
          icon: 'mdi-hand-saw'
        },
        { title: 'Combat', to: 'fight', icon: 'mdi-sword-cross' }
      ],
      secondaryLinks: [
        {
          title: 'Qui sommes-nous ?',
          to: 'about',
          icon: 'mdi-account-multiple-outline'
        },
        {
          title: 'Devenir membre',
          to: 'becoming-member',
          icon: 'mdi-account-multiple-plus-outline'
        },
        {
          title: 'Bibliothèque',
          to: 'library',
          icon: 'mdi-bookshelf'
        },
        {
          title: 'Contact',
          to: 'contact',
          icon: 'mdi-at'
        }
      ]
    }
  }
}
</script>
