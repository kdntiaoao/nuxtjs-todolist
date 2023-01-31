<script setup lang="ts">
import { useTodosStore } from '~~/stores/todos';
import type { Todo } from '~~/stores/todos';

const route = useRoute();
const router = useRouter();

const todosStore = useTodosStore();
if (process.client) {
  todosStore.prepareTodos();
}

const todo = computed((): Todo | null => {
  return todosStore.todos[Number(route.params.id) - 1] || null;
});

const removeTodo = () => {
  todosStore.removeTodo(Number(route.params.id) - 1);
  router.push({ path: '/todos' });
};
</script>

<template>
  <div class="wrapper">
    <p><NuxtLink to="/todos">&lt;&lt; タスク一覧</NuxtLink></p>
    <br />
    <h2>ID: {{ $route.params.id }}</h2>
    <ClientOnly>
      <p v-if="!todo">データがありません。</p>
      <div v-else>
        <dl class="list">
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
        <button type="button" class="btn-primary" @click="removeTodo">
          タスクを削除
        </button>
      </div>
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
  align-items: start;
  gap: 10px;
  margin: 20px 0;
}
.item-title {
  font-weight: bold;
}
.item-content {
  word-break: break-all;
}
.btn-primary {
  display: grid;
  place-content: center;
  padding: 10px 8px 8px;
  width: 160px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #ee827c;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 1px 4px #ee827c;
  transition: box-shadow 0.2s, background-color 0.2s;
}
.btn-primary:hover {
  background-color: #f06e67;
  box-shadow: 0 1px 8px #ee827c;
}
</style>
