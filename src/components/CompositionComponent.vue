<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps({
  menuOptions: {
    type: Array as () => string[],
    required: true,
  },
})

const refState = ref({
  user: { name: 'John', age: 30 },
})

const reactiveState = reactive({
  user: { name: 'John', age: 30 },
})

const handleChange = () => {
  refState.value.user.name = 'Jane'
  reactiveState.user.name = 'Jane'
}
</script>

<template>
  <p>{{ refState.user.name }}</p>
  <p>{{ reactiveState.user.name }}</p>
  <button class="black" @click="handleChange">change</button>

  <!-- <LoginForm /> -->
</template>

<style>
.red {
  background-color: red;
}
.black {
  background-color: blue;
  color: white;
}
.warning {
  background-color: yellow;
}
</style>
