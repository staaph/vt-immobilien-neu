<script setup lang="ts">
const sections = [
  {
    title: 'Legal',
    submenus: [
      {title: 'Impressum', to: '/legal/imprint'},
      {title: 'Datenschutz', to: '/legal/privacy'}

    ]
  },
  {
    title: 'Kontakt',
    submenus: [
      {title: 'Kontaktformular', to: '/contact'},
    ]
  },
  {
    title: 'Karriere',
    submenus: [
      {title: 'Offene Stellen', to: '/karriere'},
    ]
  },
]

const currentYear = new Date().getFullYear()

function scrollTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
  <footer class="bg-primary text-white side-padding py-8">
    <div class="flex flex-col md:flex-row mb-12 justify-between">
      <div class="flex flex-col md:flex-row gap-8 md:gap-24 order-2 lg:order-1">
        <section
            v-for="{title, submenus} in sections"
            :key="title"
        >
          <h3 class="text-xl select-none" v-text="title"/>
          <NuxtLink
              v-for="submenu in submenus"
              :key="submenu.title"
              :to="submenu.to"
          >
            <span class="w-full text-xl font-extralight" v-text="submenu.title"/>
          </NuxtLink>
        </section>
      </div>
      <section class="order-1 lg:order-2 flex items-end">
        <button aria-label="scroll-to-top" @click="scrollTop">
          <Icon name="material-symbols:arrow-upward" class="text-white text-4xl hover:text-secondary"/>
        </button>
      </section>
    </div>
    <p class="select-none font-extralight" v-text="`©${currentYear} V&T-Immobilien`"/>
  </footer>
</template>

<style scoped>
h3 {
  @apply font-semibold tracking-wider uppercase;
}

a {
  @apply tracking-wide;
}

section {
  @apply flex flex-col gap-1;
}
</style>
