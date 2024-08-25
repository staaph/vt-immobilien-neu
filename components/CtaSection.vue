<script setup lang="ts">
defineProps<{
  title: string,
  subtitle?: string,
  list?: string[],
  content: string,
  ctaTitle?: string,
  ctaLink?: string,
}>()
</script>

<template>
  <div>
    <div class="mb-4">
      <h1 :id="title" v-text="title" class="font-bold mb-2"/>
      <span v-text="subtitle" v-if="subtitle"/>
    </div>
    <section class="font-light">
      <p v-text="content" class="text-lg"/>
      <ul class="py-3 list-disc list-inside">
        <li v-for="(item, idx) in list" v-text="item" :key="idx" />
      </ul>
      <div class="flex flex-col gap-2 mt-6 items-center" v-if="ctaLink">
        <div class="flex gap-4 items-center w-full">
          <div class="h-[0.1rem] bg-primary w-full"/>
          <span v-text="ctaTitle" class="text-lg lg:text-2xl w-full text-center px-4"/>
          <div class="h-[0.1rem] bg-primary w-full"/>
        </div>
        <NuxtLink class="base-button text-xl max-w-max my-4" :to="ctaLink">Kontakt</NuxtLink>
      </div>
    </section>
  </div>
</template>
