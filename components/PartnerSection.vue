<template>
  <div class="bg-primary text-white full-padding">
    <h3 class="text-center text-secondary font-bold text-3xl mb-8">
      Unsere Partner
    </h3>
    <div class="slide-track">
      <p
        v-for="i in 25"
        :key="i"
        class="test"
      >
        test
      </p>
    </div>
  </div>
</template>

<style scoped>
.test {
  @apply p-4;
  width: 100px;
  animation: scroll 60s linear infinite;
}

.slide-track {
  width: 100%;
  display: flex;
  gap: 3em;
  overflow: hidden;
}

@keyframes scroll {
  0% {transform: translateX(0);}
  100% {transform: translatex(-1000%)}
}
</style>
