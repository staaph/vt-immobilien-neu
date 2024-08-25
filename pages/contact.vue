<template>
  <div class="text-white grid w-full relative">
    <div class="bg-gradient-to-b from-primary/75 via-primary/70 to-90% absolute inset-0 z-10"/>
    <img
        src="@/assets/images/contact.jpeg" class="h-[20rem] w-screen object-cover row-span-full col-span-full"
        alt=""
    >
    <div class="row-span-full col-span-full z-20 y-padding mt-20 fade-in-bottom">
      <div class="text-center tracking-wide font-light text-4xl flex flex-col items-center">
        <h1 class="text-center mb-2 text-6xl font-bold tracking-wide">Kontakt</h1></div>
    </div>
  </div>
  <section class="full-padding">
    <ContactForm/>
  </section>
</template>
