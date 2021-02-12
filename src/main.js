import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import vuetify from './plugins/vuetify'

import PageTitle from '@/components/PageTitle.vue'
import InlineImageCard from '@/components/InlineImageCard.vue'

Vue.component('PageTitle', PageTitle)
Vue.component('InlineImageCard', InlineImageCard)

Vue.config.productionTip = false

Vue.use(firestorePlugin)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
