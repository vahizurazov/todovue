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
    checkItem(id) {
      this.itemsList.map(el => {
        if (el.id === id) {
          el.checked = !el.checked
        }
        return el
      })
    },
    toggleTodo(id) {
      console.log('id', id)

      const todo = this.itemsList.find(todo => todo.id === id)
      if (!todo) return
      todo.checked = !todo.checked
    },
    addItem(label) {
      this.itemsList.push({
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
        label,
        checked: false,
      })
    },
  },
}
</script>
