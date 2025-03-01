<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id
const search = route.query.search
</script>

<template>
  <div>User {{ id }} search for: {{ search }}</div>
</template>
