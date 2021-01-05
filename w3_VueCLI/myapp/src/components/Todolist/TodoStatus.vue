<template>
  <div
    class="border border-secondary p-3"
  >待办事项：{{datalist.length}}，完成：{{completelist.length}}，未完成：{{uncompletelist.length}}</div>
</template>
<script>
export default {
  name: "TodoStatus",
  props: ["datalist"],
  computed: {
    completelist() {
      return this.datalist.filter(item => item.complete);
    },
    uncompletelist() {
      return this.datalist.filter(item => !item.complete);
    }
  }
};
</script>