<script setup>
import { useRoute, useRouter } from 'vue-router'
import { Back } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { ROUTER_PATH } from '../constants'

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backFunc: {
    type: Function
  },
  isBackButtonVisible: {
    type: Boolean,
    required: false
  }
})

const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goForCocktailRandom() {
  router.push(ROUTER_PATH.COCKTAIL_RANDOM)

  if (routeName.value === ROUTER_PATH.COCKTAIL_RANDOM) {
    router.go()
  }
}

function goBack() {
  props.backFunc ? props.backFunc() : router.go(-1)
}
</script>
<template>
  <div class="root">
    <div
      :style="`background-image: url(${props.imgUrl})`"
      class="img"
    ></div>

    <div class="main">
      <div class="btns">
        <el-button
          v-if="!isBackButtonVisible"
          type="primary"
          :icon="Back"
          circle
          class="back"
          @click="goBack"
        ></el-button>
        <el-button
          class="btn"
          @click="goForCocktailRandom"
          >Get random cocktail</el-button
        >
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.root
    display: flex
    min-height: 100vh
    background-color: $background

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    position: relative
    width: 50%
    padding: 32px 40px
.btn
    position: absolute
    top: 32px
    right: 40px
    font-family: 'Raleway', 'Arial', sans-serif
    font-size: 16px
    padding: 8px 16px
    border-radius: 4px
    background-color: $accent
    border-color: $accent
    color: $text

    &:hover,
    &:active
        background-color: darken($accent, 10%)
        border-color: darken($accent,10% )
</style>
