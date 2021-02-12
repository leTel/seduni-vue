import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/History.vue')
  },
  {
    path: '/craft',
    name: 'craft',
    component: () => import('@/views/Craft.vue')
  },
  {
    path: '/fight',
    name: 'fight',
    component: () => import('@/views/Fight.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/becoming-member',
    name: 'becoming-member',
    component: () => import('@/views/BecomingMember.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import('@/views/Library.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
