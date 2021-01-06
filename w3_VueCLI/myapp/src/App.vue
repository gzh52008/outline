<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    Hello Jingjing
    <Home/> -->
    <!-- <Datalist/> -->
    <Todolist/>
    <Slots>
      <template #default="props">
        {{props}}
      <h4>{{props.username}}</h4>
      <p>性别：{{props.gender}}</p>
      <p>年龄：{{props.age}}</p>
      </template>
    </Slots>

    <Slots>
      <template #info="{username,gender,age}">
        <h1>用户名：{{username}}</h1>
        <span>性别：{{gender}}</span>
        <span>年龄：{{age}}</span>
      </template>
    </Slots>

    <Dcomponent/>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
// import Datalist from './components/Datalist.vue';
import Todolist from './components/Todolist/index.vue';

import Slots from './components/Slots.vue';
import Dcomponent from './components/Dcomponent.vue';

export default {
  name: 'App',
  components:{
    // Home,
    // Datalist,
    Todolist,
    Slots,
    Dcomponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
