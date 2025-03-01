<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

const handleGetOrders = async () => {
  const response = await fetch('http://localhost:8080/v1/order', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmd1eWVuIE5nb2MgSGEiLCJyb2xlIjoiQWRtaW4iLCJ0dGwiOjE3NDgzMzE1MDIsInVzZXJJZCI6MX0.JXr23GxGM6uJKQNyU2coLyFEn0Lrf2HC-RsvtN7ucAs',
    },
  }).then(async (resp) => {
    const result = await resp.json()

    return result.data
  })

  return response
}

const { data, isLoading } = useQuery({
  queryKey: ['orders'],
  queryFn: handleGetOrders,
})
</script>

<template>
  <div>Vue query</div>
  <RouterLink :to="{ name: 'user-list' }">User list</RouterLink>
  <div v-if="data && !isLoading">
    <div v-for="todo in data" :key="todo.id">{{ todo.totalPrice }}</div>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>
