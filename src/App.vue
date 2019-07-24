<template>
  <section class="todoapp">
    <TodoHeader @addItem="addItem" />
    <TodoList
      :todos="todoListFiltered"
      @removeFn="removeTodo"
      @edit="updateTodo"
      :toggle="allCompleated"
      @toggleAll="toggleAllTodo"
    />
    <TodoFooter :todo="todos.length" :counter="uncompletedTodo.length" @clear="removeCompleated" />
  </section>
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
      todos: JSON.parse(localStorage.getItem(`todoVue`)) || [],
      newTodo: '',
      view: 'all',
    }
  },
  computed: {
    filter() {
      return this.$route.params.filter || ''
    },
    todoListFiltered() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.completed)
        case 'completed':
          return this.todos.filter(todo => todo.completed)
        default:
          return this.todos
      }
    },
    uncompletedTodo() {
      return this.todos.filter(e => !e.completed)
    },
    allCompleated() {
      return this.todos.length > 0 && this.uncompletedTodo.length === 0
    },
  },
  methods: {
    removeTodo(todo) {
      console.log('todo', this.todos.indexOf(todo))

      this.todos.splice(this.todos.indexOf(todo), 1)
    },
    addItem(label) {
      this.todos.unshift({
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
        label,
        completed: false,
      })
    },
    toggleAllTodo() {
      let state = this.allCompleated
      this.todos.forEach(e => (e.completed = !state))
    },
    removeCompleated() {
      this.todos = this.uncompletedTodo
    },
    updateTodo({ id, value }) {
      const todo = this.todos.find(todo => todo.id === id)
      if (!todo) return
      todo.label = value.trim()
    },
  },
  watch: {
    todos: {
      deep: true,
      handler: function() {
        try {
          return localStorage.setItem(`todoVue`, JSON.stringify(this.todos))
        } catch (e) {}
      },
    },
  },
}
</script>
