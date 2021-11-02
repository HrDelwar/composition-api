<template>
  <h1 class="text-center fs-2 text-uppercase mt-3">Todos</h1>
  <div class="row">
    <TodoItem
      v-for="todo in todos"
      :updateStatus="updateStatus"
      :todo="todo"
      :key="todo.id"
      :deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import useTodo from '../hooks/useTodo'
import TodoItem from './TodoItem.vue'
export default {
  name: 'AllTodo',
  components: { TodoItem },
  setup() {
    const { todos, fetchAllTodo, updateStatus, deleteTodo } = useTodo()
    onMounted(async () => {
      fetchAllTodo([])
    })
    return {
      todos,
      updateStatus,
      deleteTodo,
    }
  },
}
</script>

<style></style>
