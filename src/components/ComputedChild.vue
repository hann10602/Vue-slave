<script setup lang="ts">
import { onUpdated, reactive } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const formFields = reactive({
  firstName: '',
  lastName: '',
  age: 0,
})

const onSubmit = () => {
  console.log(`
    First name: ${formFields.firstName}
    Last name: ${formFields.lastName}
    Age: ${formFields.age}
    `)
}

onUpdated(() => {
  console.log('child updated')
})
</script>

<template>
  <form @submit.prevent="onSubmit" class="border border-white-700 p-2">
    <label for="firstName">First name</label>
    <input class="w-full text-black" type="text" v-model="formFields.firstName" />
    <label for="lastName">Last name</label>
    <input class="w-full text-black" type="text" v-model="formFields.lastName" />
    <label for="age">Age</label>
    <input class="w-full text-black" type="number" v-model="formFields.age" />
    <button type="submit">Submit form</button>
  </form>
</template>
