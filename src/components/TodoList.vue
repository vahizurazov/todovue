<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <!-- checked={isAllChecked()}
    onChange={selectAll}-->
    <ul class="todo-list">
      <TodoItem v-for="item in itemsList" :item="item" :key="item.id" />
      <!-- @deleted="deleted"
        @editTodo="editTodo"
      @checked="checked"-->
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
    itemsList: {
      required: true,
      type: Array,
    },
  },
}
</script>
