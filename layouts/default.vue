<template>
  <div class="flex flex-col min-h-screen">
    <TopNav class="sticky top-0 z-50"/>
    <div class="min-h-screen">
      <main class="flex-grow">
        <slot/>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

