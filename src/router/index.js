import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stripe-3dsecure-2-checkout-using-setup-intent',
      name: 'stripe-3dsecure-2-checkout-using-setup-intent',
      component: () => import('../views/stripe-3dsecure-2-checkout-using-setup-intent.vue')
    }
  ]
})

export default router
