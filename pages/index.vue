<script setup>
const config = useRuntimeConfig();
const id = config.public.id;
</script>

<template>
  <p>Index Page</p>
  <br />
  <p>{{ id }}</p>
  <br />
  <p><NuxtLink to="/todos" class="link">タスク一覧 &gt;</NuxtLink></p>
</template>

<style scoped>
.link {
  color: #66f;
  text-decoration: underline;
}
</style>
