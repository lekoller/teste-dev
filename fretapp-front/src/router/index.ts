import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/enterprises',
    name: 'enterprises',
    component: () => import('../views/Enterprises.vue')
  },
  {
    path: '/busyness',
    name: 'busyness',
    component: () => import('../views/Busyness.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
