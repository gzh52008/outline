import Vue from 'vue';
// 1. 引入
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Discover from '../views/Discover.vue';
import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import Reg from '../views/Reg.vue';


// 2. 使用
Vue.use(VueRouter);


// 3. 配置
const router = new VueRouter({
    // mode:'hash', // history

  // 路由配置
  routes:[{
    // 当浏览器地址为/home时，渲染Home组件的内容
    path:'/home',
    component:Home
  },{
    path:'/reg',
    component:Reg
  },{
    path:'/login',
    component:Login
  },{
    path:'/discover',
    component:Discover
  },{
    path:'/cart',
    component:Cart
  }]
});

export default router;