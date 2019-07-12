<template>
  <li class="todo" v-bind:class="{ completed: item.checked }">
    <!-- <TodoTextInput
            text={todo.label}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(todo.id, text)}
          />
    -->
    <div class="view">
      <input class="toggle" type="checkbox" :checked="item.checked" :id="item.id" />
      <!-- @change="toggleTodo" -->
      <!-- onChange={this.props.checked(todo.id)} -->
      <label>{{ item.label }}</label>
      <!-- onDoubleClick={this.handleDoubleClick} -->
      <button type="button" class="destroy"></button>
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
  },
}
</script>
