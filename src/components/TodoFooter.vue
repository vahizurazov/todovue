<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ counter }}</strong> items left
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

    <button class="clear-completed" @click="clearCompleted">Clear completed</button>
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
  },

  methods: {
    clearCompleted() {
      this.$emit('clear')
    },
  },
}
</script>
