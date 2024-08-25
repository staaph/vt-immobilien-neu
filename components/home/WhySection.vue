<template>
  <section class="flex flex-col gap-12 mt-4 side-padding [&>div>h3]:!text-2xl [&>div>h3]:text-primary">
    <DiagonalCard>
      <h3>Warum in Immobilien investieren?</h3>
      <p>
        Investitionen in Immobilien bieten Ihnen eine stabile und rentable Altersvorsorge sowie zahlreiche weitere
        Vorteile. Ob Sie Ihr Vermögen aufbauen, für die Sicherheit Ihrer Kinder sorgen oder steuerliche Vorteile
        nutzen
        möchten – Immobilien sind eine der sichersten Anlageformen. Erfahren Sie, wie wir Ihnen dabei helfen können,
        Ihre finanziellen Ziele durch kluge Immobilieninvestitionen zu erreichen.
      </p>
      <template #image>
        <img
            src="~/assets/images/skyline.jpg"
            class="z-0 max-h-[15rem] w-screen object-cover row-span-full col-span-full rounded-r-lg"
            alt=""
            height="1280"
            width="1920"
        >
      </template>
    </DiagonalCard>

    <DiagonalCard>
      <h3>Individuelle Beratung und maßgeschneiderte Lösungen</h3>
      <p>
        Unser Service beginnt mit einem persönlichen Beratungsgespräch, in dem wir Ihre Situation analysieren und Ihre
        Ziele verstehen. Gemeinsam entwickeln wir eine maßgeschneiderte Strategie, die genau auf Ihre Bedürfnisse
        abgestimmt ist. Unser Ziel ist es, Sie nicht nur bei der Transaktion zu begleiten, sondern Ihnen auch
        exklusive
        Immobilienangebote zu präsentieren, die noch nicht öffentlich auf dem Markt sind.
      </p>
      <template #image>
        <img
            src="~/assets/images/skyline.jpg"
            class="z-0 max-h-[15rem] w-screen object-cover row-span-full col-span-full rounded-r-lg"
            alt=""
            height="1280"
            width="1920"
        >
      </template>
    </DiagonalCard>

    <DiagonalCard>
      <h3>Vorteile von Off-Market-Immobilien</h3>
      <p>
        Off-Market-Immobilien bieten oft bessere Konditionen als öffentlich inserierte Objekte. Durch unser
        umfangreiches
        Netzwerk haben wir Zugang zu exklusiven Off-Market-Immobilien, die Ihnen die besten Konditionen bieten. Diese
        Deals werden oft hinter verschlossenen Türen abgeschlossen, und wir haben die Verbindungen und das Know-how,
        um
        Ihnen diese Angebote zu sichern.
      </p>
      <template #image>
        <img
            src="~/assets/images/skyline.jpg"
            class="z-0 max-h-[15rem] w-screen object-cover row-span-full col-span-full rounded-r-lg"
            alt=""
            height="1280"
            width="1920"
        >
      </template>
    </DiagonalCard>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped>
div {
  @apply mb-4
}

h3 {
  @apply mb-2;
}

p {
  @apply font-light leading-7;
}
</style>
