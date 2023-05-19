<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})

onMounted(() => {
  console.log(props.imgUrl)
})
</script>
<template>
  <div class="root">
    <div
      :style="`background-image: url(${props.imgUrl})`"
      class="img"
    ></div>
    <div class="main">
      <el-button class="btn">Get random cocktail</el-button>
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
