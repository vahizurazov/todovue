<template>
  <header class="header">
    <h1>Todos</h1>
    <input
      type="text"
      class="new-todo"
      @keyup.enter="handleSubmit"
      @blur="handleSubmit"
      placeholder="What needs to be done?"
      autofocus
      v-model="value"
    />
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
      const valueTrim = this.value.trim()
      if (valueTrim === '') return (this.value = '')
      this.$emit('addItem', valueTrim)
      this.value = ''
    },
  },
}
</script>
