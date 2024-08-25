<template>
  <div class="full-padding">

    <section class="mb-12">
      <h2 class="mb-2">Unsere Philosophie</h2>
      <p class="font-light">Bei V&T Immobilien stehen Ihre Bedürfnisse und Ziele im Mittelpunkt. Unsere Philosophie
        basiert auf Transparenz, Vertrauen und langjährigen Partnerschaften. Wir sind davon überzeugt, dass eine
        erfolgreiche Immobilieninvestition auf fundierter Beratung und einem maßgeschneiderten Service basiert.</p>
    </section>

    <section class="mb-12">
      <div class="mb-2">
        <h2>Unsere Werte</h2>
        <span class="text-lg font-light">Integrität, Diskretion und Engagement</span>
      </div>
      <ul class="font-light">
        <li><b>Integrität:</b> Wir handeln stets im besten Interesse unserer Kunden und stellen sicher, dass alle
          Transaktionen
          fair und transparent ablaufen.
        </li>
        <li><b>Diskretion:</b> Vertraulichkeit ist für uns von größter Bedeutung. Wir behandeln alle Informationen und
          Transaktionen mit größter Sorgfalt und Diskretion.
        </li>
        <li><b>Engagement:</b> Unser Team ist hochmotiviert und engagiert, die besten Ergebnisse für unsere Kunden zu
          erzielen.
          Ihre Zufriedenheit ist unser oberstes Ziel.
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <div class="mb-2">
        <h2>Unser Team</h2>
        <span class="text-lg font-light"> Erfahrung und Expertise vereint</span>
      </div>
      <p class="font-light">
        Unser erfahrenes Team besteht aus Immobilienexperten, die über umfassende Marktkenntnisse und jahrelange
        Erfahrung in der Branche verfügen. Wir arbeiten eng mit über 100 externen Partnern zusammen, um Ihnen den
        bestmöglichen Service zu bieten. Jeder unserer Mitarbeiter ist bestrebt, Ihnen individuelle Lösungen und
        maßgeschneiderte Dienstleistungen zu bieten.
      </p>
      <section class="mb-12 description">
        <img src="@/assets/images/valentino.png" alt="Geschäftsführer">
        <span class="font-light">
        Strukturiert, interessiert, verlässlich. Wirtschaft und Kapitalmärkte sind die Kernkompetenzen. Das Interesse für deren feingliedrigen Details und die faszinierenden Herausforderungen bildete für Valentino Lorinti den Antrieb für das Studium im Bereich internationales Finanzmanagement an der HfWU in Nürtingen und schließlich für die Verantwortung als Geschäftsführer bei VT-Immobilien.„Mein Alphabet begeistert mich von Assetklassen bis Zwischenfinanzierung, seit ich meine erste eigene Immobilie gekauft habe. Jedes neue Projekt und jeder neue zufriedene Kunde zeigt mir aufs Neue, dass ich in einem wirklich faszinierenden Business arbeiten darf.
      </span>
      </section>
      <section class="description">
        <span class="font-light order-2 lg:order-1">
          Motiviert, kreativ, zielorientiert. Seine frühe Leidenschaft für die Immobilienbranche führte Tim Wolf zum Studium im Bereich Immobilienwirtschaft an die Hochschule für Wirtschaft und Umwelt in Geislingen und schließlich zur beruflichen Erfüllung als Gesellschafter bei VT-Immobilien.„Privat wie geschäftlich lebe ich den Immobilienmarkt. Preisentwicklungen und Nachfrage faszinieren mich seit meiner Schulzeit, weshalb ich schon als Student meine erste Immobilie erworben habe. Authentizität und die Freude daran, immer neuen Menschen zu begegnen sind die Motoren, die mir innovative Wege zeigen und mir einen wertvollen Erfahrungsschatz an die Hand geben.
        </span>
        <img src="@/assets/images/tim.png" alt="Geschäftsführender Gesellschafter" class="order-1">
      </section>
    </section>

    <section class="mb-12">
      <div class="mb-2">
        <h2>Unsere Arbeitsweise</h2>
        <span class="font-light text-lg">Maßgeschneiderte Lösungen für Ihre Immobilieninvestitionen</span>
      </div>

      <ul>
        <li>
          <b>Individuelle Beratung:</b> Wir nehmen uns die Zeit, Ihre Bedürfnisse und Ziele zu verstehen und
          entwickeln darauf
          basierend eine maßgeschneiderte Anlagestrategie.
        </li>
        <li>
          <b>Exklusive Immobilienangebote:</b> Dank unseres umfangreichen Netzwerks haben wir Zugang zu exklusiven
          Off-Market-Immobilien, die Ihren Kriterien entsprechen.
        </li>
        <li>
          <b>Umfassende Unterstützung:</b> Von der ersten Beratung über die Transaktion bis hin zur Nachbetreuung stehen
          wir
          Ihnen zur Seite und unterstützen Sie bei jedem Schritt.
        </li>

      </ul>
    </section>

    <section class="flex flex-col justify-center items-center gap-4">
      <span class="text-xl">Erfahren Sie mehr über unsere Dienstleistungen und kontaktieren Sie uns für ein kostenloses Beratungsgespräch</span>
      <NuxtLink class="base-button text-xl" to="/contact">Kontakt</NuxtLink>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>
<style scoped>
.description {
  @apply flex flex-col items-center lg:flex-row lg:items-end gap-8;
}

img {
  @apply h-96;
}
</style>
