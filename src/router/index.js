import { createRouter, createWebHistory } from 'vue-router'
import { ROUTER_PATH } from '@/constants'
import HomePage from '../pages/HomePage.vue'
import CocktailRandomPage from '../pages/CocktailRandomPage.vue'
import CocktailPage from '../pages/CocktailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME,
      name: ROUTER_PATH.HOME,
      component: HomePage
    },

    {
      path: ROUTER_PATH.COCKTAIL,
      name: ROUTER_PATH.COCKTAIL,
      component: CocktailPage
    },
    {
      path: ROUTER_PATH.COCKTAIL_RANDOM,
      name: ROUTER_PATH.COCKTAIL_RANDOM,
      component: CocktailRandomPage
    }
  ]
})

export default router
