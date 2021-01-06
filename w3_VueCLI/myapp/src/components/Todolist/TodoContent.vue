<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"><input type="checkbox" v-model="checkedAll"/></th>
          <th scope="col">#</th>
          <th scope="col">代办事项</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr is="TodoItem" v-for="(item,idx) in datalist" :key="item.id" :item="item" :idx="idx"></tr> -->
        <TodoItem v-for="(item,idx) in datalist" :key="item.id" :item="item" :idx="idx" />
      </tbody>
    </table>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoContent",
  props: ["datalist"],
  computed: {
    completeList() {
      return this.datalist.filter(item => item.complete);
    },
    unCompleteList() {
      return this.datalist.filter(item => !item.complete);
    },
    checkedAll:{
      get(){
        // 被动是否全选
        return this.datalist.every(item=>item.checked)
      },
      set(newVal){
        // 主动是否全选
        this.$emit('selectall',newVal)
      },
    }
  },
  methods:{
    // selectAll(e){
    //   this.$emit('selectall',e.target.checked)
    // }
  },
  components: {
    TodoItem
  }
};
</script>