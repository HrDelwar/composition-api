import axios from 'axios'
import { ref } from 'vue'
export default function useTodo(initialTodo = []) {
  const todos = ref(initialTodo)

  const fetchAllTodo = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    todos.value = res.data
  }
  const updateStatus = async (id, status) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          ...todo,
          completed: status,
        }
      )
      if (res.status === 200) {
        todos.value.map((todo) =>
          todo.id === id ? (todo.completed = status) : todo
        )
      }
    }
  }
  const deleteTodo = async (id) => {
    const todo = todos.value.find((todo) => todo.id === id)
    if (todo) {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      )
      if (res.status === 200) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
      }
    }
  }

  return {
    fetchAllTodo,
    todos,
    updateStatus,
    deleteTodo,
  }
}
