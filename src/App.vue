<script setup lang="ts">
import { ref } from 'vue'
import Option from './components/OptionComponent.vue'
import Composition from './components/CompositionComponent.vue'
import ComputedProperties from './components/ComputedProperties.vue'

const isDisplayOptipnAPI = ref(false)

const handleToggleOptionAPI = () => {
  isDisplayOptipnAPI.value = !isDisplayOptipnAPI.value
}

const menuOptions = ['Home', 'About', 'Services', 'Contact']
</script>

<template>
  <div class="h-screen w-screen bg-black text-white">
    <header>
      <h1>header</h1>
    </header>

    <main class="w-full">
      <h1>Option API</h1>
      <Option v-if="isDisplayOptipnAPI" :menuOptions="menuOptions" />
      <hr class="my-5" />
      <h1>Composition API</h1>
      <Composition :menuOptions="menuOptions" />

      <button class="mt-20 bg-blue p-2" @click="handleToggleOptionAPI">
        {{ isDisplayOptipnAPI ? 'hide' : 'display' }}
      </button>

      <ComputedProperties />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
