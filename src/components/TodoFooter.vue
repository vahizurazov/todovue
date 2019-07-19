<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ counter }}</strong> items left
    </span>
    <ul class="filters">
      <li>
        <a href="#/">
          <!-- class={view === "all" ? "selected" : ""}
          onClick={onFilterStateChange}-->
          All
        </a>
      </li>
      <li>
        <a href="#/active">
          <!-- class={view === "active" ? "selected" : ""}
          onClick={onFilterStateChange}-->
          Active
        </a>
      </li>
      <li>
        <a href="#/completed">
          <!-- class={view === "completed" ? "selected" : ""}
          onClick={onFilterStateChange}-->
          Completed
        </a>
      </li>
    </ul>
    <!-- <ClearComleted clearCompleted={clearCompleted} /> -->
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
}
</script>
