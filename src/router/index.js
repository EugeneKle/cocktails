import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CocktailRandomPage from '../pages/CocktailRandomPage.vue'
import CocktailPage from '../pages/CocktailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/random',
      name: 'random',
      component: CocktailPage,
      
    },
    {
      path: '/cocktails/:coctailId',
      name: 'coctails',
      component: CocktailRandomPage
    }
  ]
})

export default router
