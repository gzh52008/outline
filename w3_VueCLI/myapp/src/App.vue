<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" />
    Hello Jingjing
    <Home/> -->
    <!-- <Datalist/> -->
    <Todolist/>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
// import Datalist from './components/Datalist.vue';
import Todolist from './components/Todolist/index.vue';
export default {
  name: 'App',
  components:{
    // Home,
    // Datalist,
    Todolist
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
