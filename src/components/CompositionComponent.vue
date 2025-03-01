<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { reactive, ref } from 'vue'
import VeeValidate from './VeeValidate.vue'
import { RouterLink } from 'vue-router'

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
  <div class="flex flex-col space-y-2">
    <p><RouterLink :to="{ path: 'user/1' }"> User detail by path </RouterLink></p>
    <p>
      <RouterLink :to="{ name: 'user', params: { name: '2' } }">
        User detail by right name
      </RouterLink>
    </p>
    <p>
      <RouterLink :to="{ name: 'user', params: { id: '2' } }">
        User detail by wrong name</RouterLink
      >
    </p>
    <p>
      <RouterLink :to="{ name: 'user', query: { search: 'qweqwe' } }">
        User detail by name and query
      </RouterLink>
    </p>
    <p>
      <RouterLink :to="{ path: 'user/3', query: { search: 'asdasd' } }">
        User detail by path and query
      </RouterLink>
    </p>
  </div>
  <button class="black" @click="handleChange">change</button>

  <VeeValidate />

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
