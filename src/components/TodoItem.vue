<template>
  <div class="col-lg-3 col-md-4 mb-3">
    <div
      class="
        text-white
        bg-opacity-75
        p-2
        rounded
        d-flex
        justify-content-between
        align-items-center
      "
      style="min-height: 100px"
      :class="[todo.completed ? 'bg-success' : 'bg-info']"
    >
      <input
        @change="updateStatus(todo.id, !todo.completed)"
        class="form-check-input"
        type="checkbox"
        :checked="todo.completed"
      />
      <h5
        class="fs-6 ms-2"
        :class="{ 'text-decoration-line-through': todo.completed }"
      >
        {{ todo.title }}
      </h5>
      <button
        @click="deleteTodo(todo.id)"
        class="
          text-denger
          px-1
          rounded-circle
          m-0
          border-0
          bg-danger
          text-white
          align-self-end
        "
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'updateStatus', 'deleteTodo'],
}
</script>

<style></style>
