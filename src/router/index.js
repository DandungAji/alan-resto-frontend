import { createRouter, createWebHistory } from 'vue-router'
import TransaksiView from '../views/TransaksiView.vue'
import FoodView from '../views/FoodView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transaksi',
      component: TransaksiView
    },
    {
      path: '/food',
      name: 'food',
      component: FoodView
    }
  ]
})

export default router