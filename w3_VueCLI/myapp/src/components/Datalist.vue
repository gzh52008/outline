<template>
  <div>
      <ul>
          <li v-for="item in datalist" :key="item.id">{{item.event}}</li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        {
          id: 1,
          event: "定个小目标睡Ta一整天",
          complete: true
        },
        {
          id: 2,
          event: "赚他一个亿",
          complete: false
        },
        {
          id: 3,
          event: "迎娶白富美，达到人生巅峰",
          complete: false
        },
        {
          id: 4,
          event: "出人CEO，达到疯癫状态",
          complete: false
        }
      ],
      maxId: 4
    };
  }
};
</script>
<style>
    ul{list-style: none};
</style>