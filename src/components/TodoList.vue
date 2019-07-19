<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <!-- checked={isAllChecked()}
    change={selectAll}-->
    <ul class="todo-list">
      <TodoItem v-for="item in itemsList" :item="item" :key="item.id" :removeFn="removeFn" />
      <!--:removeFn="removeFn"
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
    removeFn: Function,
  },
  methods: {
    log: function() {
      console.log('asd')
    },
  },
}
</script>
