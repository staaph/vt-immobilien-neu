<script setup lang="ts">
useSeoMeta({
  title: 'Home'
})
</script>

<template>
  <HomeHero/>
  <section class="">
    <h2 class="side-padding py-12 text-center tracking-wider leading-9">
      Willkommen bei V&T Immobilien, Ihrem vertrauenswürdigen Partner für erstklassige Immobilieninvestitionen in
      Deutschland. <br>
      Wir bieten Ihnen einen umfassenden Rundum-Service, der Ihre individuellen Bedürfnisse und Ziele in
      den Mittelpunkt stellt.
    </h2>
    <!--    <PartnerSection/>-->
      <HomeProcessSection />
    <HomeWhySection class="py-12"/>
  </section>
</template>
