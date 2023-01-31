<script setup>
import { useTodosStore } from '~~/stores/todos';
const todosStore = useTodosStore();
if (process.client) {
  todosStore.prepareTodos();
}

const addTodo = () => {
  const todo = {
    timestamp: Date.now(),
    title: 'hoge',
    content: 'Hello, World!',
  };
  todosStore.addTodo(todo);
};
</script>

<template>
  <div class="wrapper">
    <p><NuxtLink to="/">&lt;&lt; TOP</NuxtLink></p>
    <br />
    <h2>タスク一覧</h2>
    <ClientOnly>
      <div v-if="!todosStore.todos || todosStore.todos.length === 0">
        タスクがありません。
      </div>
      <ul v-else class="todo-list">
        <li
          v-for="(todo, index) in todosStore.todos"
          :key="todo.timestamp"
          class="todo-item-container"
        >
          <NuxtLink :to="`/todos/${index + 1}`" class="todo-item">
            <p>No. {{ index + 1 }}</p>
            <dl class="list">
              <div class="item">
                <dt class="item-title">日時</dt>
                <dd class="item-content">{{ todo.timestamp }}</dd>
              </div>
              <div class="item">
                <dt class="item-title">タイトル</dt>
                <dd class="item-content">{{ todo.title }}</dd>
              </div>
            </dl>
          </NuxtLink>
        </li>
      </ul>
      <button type="button" @click="addTodo">タスクを追加</button>
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
.todo-item {
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0 1px 8px rgb(192, 162, 199, 0.4);
  border-radius: 10px;
  transition: box-shadow 0.2s;
  display: block;
}
.todo-item:hover {
  box-shadow: 0 1px 8px rgb(192, 162, 199, 0.4),
    0 2px 8px rgb(192, 162, 199, 0.2);
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
