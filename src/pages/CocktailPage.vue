<script setup>
import { computed, ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { COCKTAIL_BY_ID } from '../constants/api'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const cocktail = ref(null)
const cocktailId = computed(() => route.path.split('/').pop())

async function getCoctail() {
  const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailId.value}`)
  cocktail.value = data?.data?.drinks[0]
}

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) {
      break
    }

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]

    ingredients.push(ingredient)
  }

  return ingredients
})

getCoctail()
</script>

<template>
  <div
    v-if="cocktail"
    class="wrap"
  >
    <AppLayout :imgUrl="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <h2 class="title">{{ cocktail.strDrink }}</h2>
          <div class="line"></div>
          <div class="list">
            <div
              class="list-item"
              v-for="(item, key) in ingredients"
              :key="key"
            >
              {{ item.name }}
              |
              <template v-if="item.measure">
                {{ item.measure }}
              </template>
            </div>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
</style>
