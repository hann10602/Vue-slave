<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'

const handleGetUsers = async () => {
  const response = await fetch('http://localhost:8080/v1/user', {
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

const handleCreateUser = async (value: any) => {
  await fetch('http://localhost:8080/v1/user', {
    method: 'POST',
    body: JSON.stringify(value),
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmd1eWVuIE5nb2MgSGEiLCJyb2xlIjoiQWRtaW4iLCJ0dGwiOjE3NDgzMzE1MDIsInVzZXJJZCI6MX0.JXr23GxGM6uJKQNyU2coLyFEn0Lrf2HC-RsvtN7ucAs',
    },
  })
}

const queryClient = useQueryClient()

const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: handleGetUsers,
  staleTime: 5000,
})

const mutation = useMutation({
  mutationFn: handleCreateUser,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['users'],
    })
  },
})
</script>

<template>
  <div>Vue query</div>
  <RouterLink :to="{ name: 'order-list' }">Order list</RouterLink>
  <div v-if="data && !isLoading">
    <div v-for="todo in data" :key="todo.id">{{ todo.username }}</div>
    <button
      class="bg-green-300"
      @click="
        mutation.mutate({
          fullName: 'Nguyen Ngoc Ha',
          username: 'newuser11',
          password: 'newpassword17',
          phoneNumber: '09234234235',
        })
      "
    >
      Add new user
    </button>
  </div>
  <div v-else>
    <p>Loading</p>
  </div>
</template>
