import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [
      {
        title: 'Accueil',
        to: '/',
        icon: 'mdi-home-variant-outline',
        type: 'home'
      },
      {
        title: 'Histoire',
        to: 'history',
        icon: 'mdi-book-open-page-variant-outline',
        src: require('@/assets/img/history_card.jpg'),
        type: 'primary'
      },
      {
        title: 'Artisanat',
        to: 'craft',
        icon: 'mdi-hand-saw',
        src: require('@/assets/img/craft_card.jpg'),
        type: 'primary'
      },
      {
        title: 'Combat',
        to: 'fight',
        icon: 'mdi-sword-cross',
        src: require('@/assets/img/fight_card.jpg'),
        type: 'primary'
      },
      {
        title: 'Qui sommes-nous ?',
        to: 'about',
        icon: 'mdi-account-multiple-outline',
        type: 'secondary'
      },
      {
        title: 'Devenir membre',
        to: 'becoming-member',
        icon: 'mdi-account-multiple-plus-outline',
        type: 'secondary'
      },
      {
        title: 'Bibliothèque',
        to: 'library',
        icon: 'mdi-bookshelf',
        type: 'secondary'
      },
      {
        title: 'Contact',
        to: 'contact',
        icon: 'mdi-at',
        type: 'secondary'
      }
    ]
  },
  getters: {
    homePage: state => {
      return state.pages.find(page => page.type === 'home')
    },
    primaryPages: state => {
      return state.pages.filter(page => page.type === 'primary')
    },
    secondaryPages: state => {
      return state.pages.filter(page => page.type === 'secondary')
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
