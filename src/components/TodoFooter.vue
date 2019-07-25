<template>
  <footer class="footer" v-show="todo.length > 0">
    <span class="todo-count">
      <strong>{{ counter }}</strong>
      {{ counter === 1 ? 'items' : 'item' }} left
    </span>

    <ul class="filters">
      <li>
        <router-link to="/all">All</router-link>
      </li>
      <li>
        <router-link to="/active">Active</router-link>
      </li>
      <li>
        <router-link to="/completed">Completed</router-link>
      </li>
    </ul>

    <button class="clear-completed" @click="clearCompleted" v-show="showBtnClear">Clear completed</button>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    counter: {
      required: true,
      type: Number,
    },
    todo: Array,
    showBtnClear: Boolean,
  },

  methods: {
    clearCompleted() {
      this.$emit('clear')
    },
  },
}
</script>
