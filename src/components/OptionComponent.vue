<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import { getMousePosition } from '@/utils'

export default {
  props: {
    menuOptions: {
      type: Array as () => string[],
      required: true,
    },
    buttonClass: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      isDisplay: false,
      x: 0,
      y: 0,
    }
  },

  methods: {
    updateMouse(event: any) {
      const pos = getMousePosition(event)
      this.x = pos.x
      this.y = pos.y
    },
    handleIncrease() {
      this.x++
    },
  },

  watch: {
    x(newValue, oldValue) {
      console.log('x', newValue, oldValue)
    },
    y(newValue, oldValue) {
      console.log('y', newValue, oldValue)
    },
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
    // window.addEventListener('mousemove', this.updateMouse)
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
    // window.removeEventListener('mousemove', this.updateMouse)
  },
  unmounted() {
    console.log('unmounted')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<template>
  <button class="black" v-for="option in menuOptions" :key="option">{{ option }}</button>
  <h1>{{ x }}</h1>

  <button v-if="buttonClass === 'black'" :class="buttonClass" @click="handleIncrease">
    Click me
  </button>
  <!-- <button v-else-if="buttonClass === 'red'" :class="buttonClass" @click="handleIncrease">
    Error
  </button> -->
  <button v-else :class="buttonClass" @click="handleIncrease">Warning</button>
</template>

<style>
.red {
  background-color: red;
}
.black {
  background-color: black;
  color: white;
}
.warning {
  background-color: yellow;
}
</style>
