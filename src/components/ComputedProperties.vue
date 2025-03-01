<script setup lang="ts">
import { onUpdated, ref } from 'vue'

const user = ref({
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
})

const { value } = user

const handleChangeFirstName = () => {
  value.firstName = 'Jane'

  console.log(user.value.firstName)
}

onUpdated(() => {
  console.log('parent updated')
})
</script>

<template>
  <button @click="handleChangeFirstName" class="bg-yellow-200 text-black">Change first name</button>
  <p>{{ user.firstName }}</p>
  <!-- <ComputedChild :user="value" /> -->
</template>
