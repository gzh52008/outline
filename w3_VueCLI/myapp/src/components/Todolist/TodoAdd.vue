<template>
  <div class="input-group mt-3">
    <input type="text" class="form-control" ref="input" v-model="event" @keyup.enter="addItem" />
    <div class="input-group-append">
      <button class="btn btn-success" @click="addItem">添加</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoAdd",
  data: function() {
    return {
      event: ""
    };
  },
  template: `#todoAdd`,
  methods: {
    addItem() {
      // 触发自定义事件
      this.$emit("add", this.event);

      // this.$on('add',)// 与v-on一致

      // 清空并自动获得焦点
      this.event = "";

      this.$refs.input.focus();
    }
  }
};
</script>