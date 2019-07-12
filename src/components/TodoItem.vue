<template>
  <li class="todo">
    <!-- <TodoTextInput
            text={todo.label}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(todo.id, text)}
          />
    -->
    <div class="view">
      <input class="toggle" type="checkbox" />
      <!-- :id="item.id" -->
      <!-- checked={todo.checked}
      onChange={this.props.checked(todo.id)}-->
      <label>{{item.label}}</label>
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
