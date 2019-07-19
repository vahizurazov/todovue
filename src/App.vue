<template>
  <div id="app">
    <section class="todoapp">
      <TodoHeader @addItem="addItem" />
      <TodoList
        :todos="todos"
        :removeFn="removeTodo"
        :toggle="allCompleated"
        @toggleAll="toggleAllTodo"
      />
      <TodoFooter :counter="uncompletedTodo.length" />
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
      todos: [],
      visibleItems: [],
      newTodo: '',
      view: 'all',
    }
  },
  computed: {
    uncompletedTodo() {
      return this.todos.filter(e => !e.completed)
    },
    allCompleated() {
      return this.todos.length > 0 && this.uncompletedTodo.length === 0
    },
  },
  methods: {
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    addItem(label) {
      this.todos.push({
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
        label,
        completed: false,
      })
    },
    toggleAllTodo() {
      let state = this.allCompleated
      this.todos.forEach(e => (e.completed = !state))
    },
  },
}
</script>
