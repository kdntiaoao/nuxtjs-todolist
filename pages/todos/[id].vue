<script setup lang="ts">
import { useTodosStore } from '~~/stores/todos';
import type { Todo } from '~~/stores/todos';

const route = useRoute();

const todosStore = useTodosStore();
if (process.client) {
  todosStore.prepareTodos();
}

const todo = computed((): Todo | null => {
  return todosStore.todos[Number(route.params.id) - 1] || null;
});
</script>

<template>
  <div class="wrapper">
    <p><NuxtLink to="/todos">&lt;&lt; タスク一覧</NuxtLink></p>
    <br />
    <h2>ID: {{ $route.params.id }}</h2>
    <ClientOnly>
      <p v-if="!todo">データがありません。</p>
      <dl class="list" v-else>
        <div class="item">
          <dt class="item-title">日時</dt>
          <dd class="item-content">{{ todo.timestamp }}</dd>
        </div>
        <div class="item">
          <dt class="item-title">タイトル</dt>
          <dd class="item-content">{{ todo.title }}</dd>
        </div>
        <div class="item">
          <dt class="item-title">内容</dt>
          <dd class="item-content">{{ todo.content }}</dd>
        </div>
      </dl>
    </ClientOnly>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
}
.item {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 10px;
}
.item-title {
  font-weight: bold;
}
</style>
