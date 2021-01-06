<template>
  <tr :id="item.id" :class="{'table-success':item.complete}" @click="select(item.id)">
    <td><input type="checkbox" :checked="item.checked" /></td>
    <th scope="row">{{idx+1}}</th>
    <td>{{item.event}}</td>
    <td>{{item.complete ? '是':'否'}}</td>
    <td>
      <!-- <button class="btn btn-outline-primary btn-sm" @click="complete(item.id)">完成</button>
      <button class="btn btn-outline-danger btn-sm" @click="remove(item.id)">删除</button> -->
      <TodoButton class="btn-outline-primary btn-sm" @click.native.stop="complete(item.id)">完成</TodoButton> 
      <TodoButton class="btn-outline-danger btn-sm" @click.native.stop="remove(item.id)">删除</TodoButton>
    </td>
  </tr>
</template>
<script>
import Bus from './Bus';
import TodoButton from './TodoButton.vue';

export default {
  name: "TodoItem",
  props: ["item", "idx"],
  methods: {
    complete(id) {
      // 触发事件并传递数据
      Bus.$emit('complete',id);
    },
    remove(id) {
      Bus.$emit('remove',id);
    },
    select(id){
      Bus.$emit('select',id)
    }
  },
  components:{
    TodoButton
  }
};
</script>