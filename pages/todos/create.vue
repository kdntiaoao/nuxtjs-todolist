<script setup>
import { useTodosStore } from '~~/stores/todos';

const router = useRouter();

const todosStore = useTodosStore();
if (process.client) {
  todosStore.prepareTodos();
}

const inputs = reactive({ title: '', content: '' });

const onSubmit = () => {
  const todo = {
    timestamp: Date.now(),
    title: inputs.title,
    content: inputs.content,
  };
  todosStore.addTodo(todo);
  router.push({ path: '/todos' });
};
</script>

<template>
  <div class="wrapper">
    <p><NuxtLink to="/">&lt;&lt; TOP</NuxtLink></p>
    <br />
    <h2 class="heading">タスク追加</h2>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label for="title" class="field-label">タイトル</label>
        <input
          type="text"
          id="title"
          v-model="inputs.title"
          required
          class="input-text"
        />
      </div>
      <div class="field">
        <label for="content" class="field-label">内容</label>
        <textarea
          id="content"
          rows="3"
          v-model="inputs.content"
          required
          class="textarea"
        ></textarea>
      </div>
      <button type="submit" class="btn-primary">追加</button>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
}
.heading {
  margin-bottom: 20px;
}
.field {
  display: grid;
  margin: 20px 0;
  gap: 4px;
}
.field-label {
  font-weight: bold;
}
.input-text {
  padding: 10px 8px 8px;
  border: 1px solid #ccc;
}
.textarea {
  resize: vertical;
  padding: 10px 8px 8px;
  border: 1px solid #ccc;
}
.btn-primary {
  display: grid;
  place-content: center;
  padding: 10px 8px 8px;
  width: 160px;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #a59aca;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 1px 4px #a59aca;
  transition: box-shadow 0.2s, background-color 0.2s;
}
.btn-primary:hover {
  background-color: #9a89cf;
  box-shadow: 0 1px 8px #a59aca;
}
</style>
