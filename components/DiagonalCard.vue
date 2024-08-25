<template>
  <section class="flex border rounded-lg">
    <div class="flex flex-col p-8">
      <slot />
    </div>
    <div class="diagonal">
      <slot name="image" />
    </div>
  </section>
</template>

<style scoped>
.diagonal {
  will-change: transform;
  clip-path: polygon(0 0%, 100% 0%, 100% 100%, 20% 100%);
}
</style>
