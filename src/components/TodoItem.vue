<template>
  <li class="todo" v-bind:class="{ completed: item.checked }">
    <!-- <TodoTextInput
            text={todo.label}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(todo.id, text)}
          />
    -->
    <div class="view">
      <input class="toggle" type="checkbox" v-model="item.checked" :id="item.id" />
      <!-- :checked="item.checked" -->
      <!-- @change="toggleTodo" -->
      <!-- onChange={this.props.checked(todo.id)} -->
      <label>{{ item.label }}</label>
      <!-- onDoubleClick={this.handleDoubleClick} -->
      <button type="button" class="destroy" v-on:click="removeFn(item)"></button>
    </div>
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
  },
}
</script>
