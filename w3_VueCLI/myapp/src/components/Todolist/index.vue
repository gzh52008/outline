<template>
  <div class="todolist container">
    <TodoAdd v-on:add="addItem"></TodoAdd>
    <TodoContent :datalist="datalist" v-on:selectall="selectAll"></TodoContent>
    <TodoStatus :datalist="datalist"></TodoStatus>
  </div>
</template>
<script>
import TodoAdd from "./TodoAdd.vue";
import TodoContent from "./TodoContent.vue";
import TodoStatus from "./TodoStatus.vue";

import 'bootstrap/dist/css/bootstrap.css';

import Bus from './Bus';

export default {
  data() {
    return {
      datalist: [
        {
          id: 1,
          event: "定个小目标睡Ta一整天",
          complete: true,
          checked:false,
        },
        {
          id: 2,
          event: "赚他一个亿",
          complete: false,
          checked:false,
        },
        {
          id: 3,
          event: "迎娶白富美，达到人生巅峰",
          complete: false,
          checked:true,
        },
        {
          id: 4,
          event: "出人CEO，达到疯癫状态",
          complete: false,
          checked:false,
        }
      ],
      maxId: 4
    };
  },
  components: {
    TodoAdd,
    TodoContent,
    TodoStatus
  },
  methods: {
    // 添加
    addItem(data) {
      let newEvent = {
        id: ++this.maxId,
        event: data,
        complete: false
      };
      this.datalist.push(newEvent);
    },
    // 删除
    removeItem(id) {
      this.datalist = this.datalist.filter(item => item.id != id);
    },

    // 修改
    completeItem(id) {
      this.datalist.forEach(item => {
        if (item.id == id) {
          item.complete = true;
        }
      });
    },
    selectItem(id){
      this.datalist = this.datalist.map(item=>{
        if(item.id == id){
          item.checked = !item.checked;
        }
        return item;
      })
    },
    selectAll(checked){
      this.datalist = this.datalist.map(item=>{
        item.checked = checked;
        return item;
      })
    }
  },
  created(){
    Bus.$on('complete',this.completeItem)
    Bus.$on('remove',this.removeItem)
    Bus.$on('select',this.selectItem)
  },
};
</script>
<style>
ul {
  list-style: none;
}
</style>