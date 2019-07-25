<template>
  <section class="main">
    <!-- eslint-disable-next-line -->
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="toggle"
      @click="compleatAllTodo"
    />
    <label v-show="todos.length > 0" for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- eslint-disable-next-line -->
      <TodoItem
        v-for="item in todos"
        :item="item"
        :key="item.id"
        @edit="editT"
        @removeFn="deletItem"
      />
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
  },
  methods: {
    compleatAllTodo() {
      this.$emit('toggleAll')
    },
    deletItem(item) {
      this.$emit('removeFn', item)
    },
    editT({ id, value }) {
      this.$emit('edit', { id, value })
    },
  },
}
</script>
