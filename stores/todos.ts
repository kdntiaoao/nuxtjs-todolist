import { defineStore } from 'pinia';

export type Todo = {
  timestamp: number;
  title: string;
  content: string;
};

export const useTodosStore = defineStore('todos', {
  state: (): { todos: Todo[] } => ({ todos: [] }),
  actions: {
    prepareTodos() {
      const todosStr = sessionStorage.getItem('todos');
      if (typeof todosStr === 'undefined' || todosStr === null) {
        return;
      }
      this.todos = JSON.parse(todosStr);
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
      sessionStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
