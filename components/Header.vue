<template>
  <header class="header">
    <div class="heading-container">
      <NuxtLink to="/" class="heading"> Todo List </NuxtLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 60px;
  box-shadow: 0 0 8px #aaa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px 4px;
}
.heading {
  font-size: 40px;
  font-family: 'Allura', cursive;
  line-height: 1;
}
</style>
