<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log(username.value, password.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label for="username">Username</label>
    <input type="text" v-model="username" />
    <label for="password">Password</label>
    <input type="password" v-model="password" />
    <button type="submit">Submit form</button>
  </form>
</template>
