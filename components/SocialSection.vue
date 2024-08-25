<script setup lang="ts">
const socialLinks = [
  {name: 'LinkedIn', link: 'https://www.linkedin.com/company/v-t-immobilien/', icon: 'mdi:linkedin'},
  {name: 'Instagram', link: 'https://www.instagram.com/vt_immobilien_/?utm_source=qr', icon: 'mdi:instagram'},
]
</script>

<template>
  <section class="flex gap-2">
    <NuxtLink v-for="{name, link, icon} in socialLinks" :key="link" :to="link" :aria-label="name">
      <Icon :name="icon" class="h-10 w-8 hover:text-black/75"/>
    </NuxtLink>
  </section>
</template>
