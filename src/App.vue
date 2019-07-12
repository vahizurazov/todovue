<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader @addItem="addItem" />
      <TodoList :itemsList="itemsList" />
      <TodoFooter />
    </section>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      itemsList: [],
      visibleItems: [],
      newTodo: '',
      view: 'all',
    }
  },
  methods: {
    // updateTodo({ id, value }) {
    //   const todo = this.todoList.find(todo => todo.id === id)
    //   if (!todo) return
    //   todo.value = value
    // },
    addItem(label) {
      //  console.log('itemsListBefore',this.itemsList);
      this.itemsList.push({
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
        label,
        checked: false,
      })
      //  console.log('itemsListAfter',this.itemsList);
    },
  },
}
</script>
