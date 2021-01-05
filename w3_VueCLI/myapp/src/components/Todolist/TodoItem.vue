<template>
  <tr :id="item.id" :class="{'table-success':item.complete}">
    <th scope="row">{{idx+1}}</th>
    <td>{{item.event}}</td>
    <td>{{item.complete ? '是':'否'}}</td>
    <td>
      <button class="btn btn-outline-primary btn-sm" @click="complete(item.id)">完成</button>
      <button class="btn btn-outline-danger btn-sm" @click="remove(item.id)">删除</button>
    </td>
  </tr>
</template>
<script>
import Bus from './Bus';

export default {
  name: "TodoItem",
  props: ["item", "idx"],
  template: "#todoItem",
  methods: {
    complete(id) {
      // 触发事件并传递数据
      Bus.$emit('complete',id);
    },
    remove(id) {
      Bus.$emit('remove',id);
    }
  }
};
</script>