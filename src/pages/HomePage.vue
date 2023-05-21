<script setup>
import { ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()

rootStore.getIngredients()

const { ingredients } = storeToRefs(rootStore)

console.log(ingredients)
const ingredient = ref(null)
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <h2 class="title">Choose your drink</h2>

        <div class="line"></div>

        <div class="select-wrapper">
          <el-select
            v-model="ingredient"
            placeholder="Choose main ingredient"
            size="large"
            class="select"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"  
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.wrapper
  display: flex
  align-items: center
  justify-content: center

.info
  padding: 80px 0px
  text-align: center
</style>
