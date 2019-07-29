<template>
  <section class="todoapp">
    <TodoHeader @addItem="addItem" v-show="isShowAll" />
    <TodoList
      :todos="todoListFiltered"
      @removeFn="removeTodo"
      @edit="updateTodo"
      :toggle="allCompleated"
      @toggleAll="toggleAllTodo"
      v-show="isShowAll"
    />
    <TodoFooter
      :todo="todos"
      :counter="uncompletedTodo.length"
      @clear="removeCompleated"
      :showBtnClear="uncheckedTodo"
      v-show="isShowAll"
    />

    <BtnSub v-show="!isShowAll">{{ btnText }}</BtnSub>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import BtnSub from './BtnSub.vue'

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    BtnSub,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem(`todoVue`)) || [],
      newTodo: '',
      view: 'all',
      btnText: 'Save',
      isShowAll: true,
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
    uncheckedTodo() {
      return this.todos.some(e => e.completed)
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
        } catch (e) {
          console.log('WARNING! ERROR!')
        }
      },
    },
  },
}
</script>
