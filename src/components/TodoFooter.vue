<template>
  <footer class="footer">
    <!-- <Counter itemList={itemList} /> -->
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
  props: {},
}
</script>
