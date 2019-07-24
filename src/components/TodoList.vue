<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="toggle"
      @click="compleatAllTodo"
    />
    <label v-show="todos.length > 0" for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <TodoItem v-for="item in todos" :item="item" :key="item.id" @edit="editT" @removeFn="delT" />
    </ul>
  </section>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      required: true,
      type: Array,
    },
    toggle: {
      required: true,
      type: Boolean,
    },
    removeFn: Function,
    edit: Function,
  },
  methods: {
    compleatAllTodo() {
      this.$emit('toggleAll')
    },
    delT(item) {
      this.$emit('removeFn', item)
    },
    editT({ id, value }) {
      this.$emit('edit', { id, value })
    },
  },
}
</script>
