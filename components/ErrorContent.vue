<template>
  <div class="flex flex-col items-center justify-center y-padding side-padding">
    <div class="flex flex-col gap-4 items-center">
      <Icon name="tabler:face-id-error" class="h-24 w-24"/>
      <h1 class="font-semibold">Ups, diese Seite existiert nicht.</h1>
      <NuxtLink to="/" class="base-button">
        zurück zur Startseite
      </NuxtLink>
    </div>
  </div>
</template>
