<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div
        class="pic"
        :style="`background-image: url(${cocktail.strDrinkThumb})`"
      ></div>
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    width: calc((100% - 76px) / 3)
    margin-right: 30px
    padding-bottom: 20px

    &:nth-child(3n + 3)
        margin-right: 0px

.name
    padding-top: 15px
    letter-spacing: 0.1em
    white-space: nowrap
    width: 100%
    text-overflow: ellipsis

.pic
    width: 120px
    height: 120px
    margin: 0 auto
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: 100%
</style>
