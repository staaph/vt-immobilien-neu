<script setup lang="ts">
const items = [
  {
    icon: 'material-symbols:person',
    title: 'Erstberatung',
    content: 'Wir beginnen mit einem persönlichen Beratungsgespräch, in dem wir Ihre Situation und Ziele analysieren'
  },
  {
    icon: 'material-symbols:grouped-bar-chart',
    title: 'Individuelle Strategie',
    content: 'Basierend auf Ihren Anforderungen entwickeln wir eine maßgeschneiderte Anlagestrategie'
  },
  {
    icon: 'ph:magnifying-glass-bold',
    title: 'Immobiliensuche',
    content: 'Wir suchen gezielt nach Immobilien, die perfekt zu Ihrer maßgeschneiderten Strategie passen'
  },
  {
    icon: 'uil:transaction',
    title: 'Transaktion und Finanzierung',
    content: 'Wir unterstützen Sie bei der Transaktion und bieten durch unsere Expertise und unser Partnernetzwerk beste Finanzierungskonditionen'
  },
  {
    icon: 'fluent:people-team-16-filled',
    title: 'Nachbetreuung',
    content: 'Auch nach dem Kauf stehen wir Ihnen für alle Fragen rund um Ihre Immobilie zur Verfügung. Wir unterstützen Sie langfristig beim Vermögensaufbau und übernehmen die Suche nach passenden Immobilien sowie die Mietverwaltung. So können Sie deutschlandweit Immobilien erwerben, ohne sich um die Verwaltung sorgen zu müssen'
  }
]
</script>

<template>
  <section class="mt-4 full-padding">
    <h3 class="mb-6 text-secondary text-3xl text-center font-semibold tracking-wide">Unser Prozess</h3>
    <ol class="relative border-s border-gray-300">
      <li v-for="({title, content, icon}, idx) in items" :key="idx" class="mb-10 ms-6">
        <span
            class="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-6 border"
        >
        <Icon
            :name="icon"
        />
        </span>
        <div class="flex flex-col ml-4">
          <span class="font-bold text-xl text-secondary tracking-wide" v-text="title"/>
          <span class="md:text-lg leading-8 font-light" v-text="content"/>
        </div>
      </li>
    </ol></section>
</template>
