<script setup>
import AppLayout from '../components/AppLayout.vue'
import { useRootStore } from '../stores/root'
import { storeToRefs } from 'pinia'

const rootStore = useRootStore()

rootStore.getIngredients()

const { ingredients } = storeToRefs(rootStore)
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg">
    <div class="wrapper">
      <div class="info">
        <h2 class="title">Choose your drink</h2>

        <div class="line"></div>
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
