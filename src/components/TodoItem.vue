<template>
  <li class="todo" v-bind:class="{ completed: item.completed, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="item.completed" :id="item.id" />
      <label v-on:dblclick="editTodo">{{ item.label }}</label>

      <button type="button" class="destroy" v-on:click="removeFn(item)"></button>
    </div>
    <input
      type="text"
      class="edit"
      @keyup.enter="doneEditTodo"
      @blur="doneEditTodo"
      v-model="editValue"
      v-if="isEditing"
    />
    <!-- v-focus -->
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      required: true,
      type: Object,
    },
    removeFn: Function,
    edit: Function,
  },
  data() {
    return {
      isEditing: false,
      editValue: '',
    }
  },
  methods: {
    editTodo() {
      this.isEditing = true
      this.editValue = this.item.label
    },
    doneEditTodo() {
      if (!this.isEditing) return
      if (this.editValue === '') {
        console.log('this.item.id', this.item)
        this.$emit('removeFn', this.item)
        this.isEditing = false
        return
      }
      this.$emit('edit', {
        id: this.item.id,
        value: this.editValue,
      })
      this.isEditing = false
      this.editValue = ''
    },
  },
}
</script>
