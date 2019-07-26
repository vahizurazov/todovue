<template>
  <li class="todo" v-bind:class="{ completed: item.completed, editing: isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" v-model="item.completed" :id="item.id" />
      <label v-on:dblclick="editTodo" :title="massage">{{ item.label }}</label>

      <button type="button" class="destroy" v-on:click="deletItem"></button>
    </div>
    <input
      type="text"
      class="edit"
      @keyup.enter="doneEditTodo"
      @blur="doneEditTodo"
      v-model="editValue"
      v-if="isEditing"
      ref="focusInput"
    />
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
  },
  data() {
    return {
      isEditing: false,
      editValue: '',
      massage: 'ХУЛЕ ТАК ДОЛГО ЗАСТЫЛ НА ОДНОМ МЕСТЕ? НАЖМИ ЧТО-ТО!!',
    }
  },
  methods: {
    editTodo() {
      this.isEditing = true
      this.editValue = this.item.label
      this.focusOn()
    },
    async focusOn() {
      await this.$nextTick()
      this.$refs.focusInput.focus()
    },
    doneEditTodo() {
      if (!this.isEditing) return
      if (this.editValue.trim() === '') {
        this.deletItem()
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
    deletItem() {
      this.$emit('removeFn', this.item)
    },
  },
}
</script>
