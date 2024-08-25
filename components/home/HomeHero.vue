<template>
  <div class="text-white grid w-full relative diagonal">
    <div class="bg-gradient-to-b from-primary/75 via-primary/70 to-90% absolute inset-0 z-10"/>
    <img
        src="~/assets/images/skyline.jpg"
        class="z-0 max-h-[50rem] w-screen object-cover diagonal row-span-full col-span-full"
        alt=""
        height="1280"
        width="1920"
    >
    <div class="row-span-full col-span-full z-20 mt-12 y-padding fade-in-bottom">
      <div class="text-center tracking-wide font-light text-3xl flex flex-col items-center">
        <img src="@/assets/svg/21.svg" class="z-50 w-[20rem]" alt="">
        <span class="font-semibold tracking-wide">
         Ihr Partner für maßgeschneiderte Immobilieninvestitionen </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.diagonal {
  will-change: transform;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% calc(100% - 100px));
}
</style>
