<template>
  <header class="header">
    <h1>Todos</h1>
    <input
      type="text"
      class="new-todo"
      v-on:keyup.enter="handleSubmit"
      placeholder="What needs to be done?"
      autofocus
      v-model="value"
    />
    <!-- onKeyDown={this.handleSubmit}
    onBlur={this.handleBlur}-->
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  props: {},
  data() {
    return {
      value: '',
    }
  },
  methods: {
    handleSubmit() {
      if (this.value === '') return
      this.$emit('addItem', this.value)
      this.value = ''
    },
  },
}
</script>
