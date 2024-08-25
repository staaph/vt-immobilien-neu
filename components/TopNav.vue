<script setup lang="ts">
const menu = [
  {
    name: 'Über uns',
    path: '/about'
  },
  {
    name: 'Karriere',
    path: '/karriere'
  },
  {
    name: 'Kaufen',
    path: '/kaufen'
  },
  {
    name: 'Verkaufen',
    path: '/verkaufen'
  }
]
</script>

<template>
  <nav class="bg-primary side-padding py-4 flex justify-between shadow-md items-center">
    <NuxtLink to="/">
      <img src="/assets/svg/logo.svg" class="h-auto w-56" alt="VT-Immobilien | Home">
    </NuxtLink>
    <section class="flex gap-6">
      <NuxtLink
          v-for="{name, path} in menu"
          :key="name"
          :to="path"
          class="text-white font-light text-xl"
      >
        {{ name }}
      </NuxtLink>
    </section>
  </nav>
</template>
