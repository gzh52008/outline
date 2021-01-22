import Vue from 'vue';
// 1. 引入
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Discover from '../views/Discover.vue';
import Omg from '../views/Discover/Omg.vue'
import Kdy from '../views/Discover/Kdy.vue'
import Lls from '../views/Discover/Lls.vue'
import Tissot from '../views/Discover/Tissot.vue'


import Cart from '../views/Cart.vue';
import Login from '../views/Login.vue';
import Reg from '../views/Reg.vue';
import Goods from '../views/Goods.vue';
import NotFound from '../views/NotFound.vue';
import Mine from '../views/Mine.vue';

import store from '../store'
import request from '../utils/request'

// 2. 使用
Vue.use(VueRouter);


// 3. 配置
const router = new VueRouter({
  // mode:'history', // history,hash

  // 路由配置
  routes: [{
    // 当浏览器地址为/home时，渲染Home组件的内容
    path: '/home',
    component: Home,
    // components:{
    //   left:
    //   main:
    // }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/reg',
    component: Reg
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/mine',
    meta: { requiresAuth: true }, // 需要登录权限才能访问
    component: Mine
  }, {
    path: '/discover',
    component: Discover,
    redirect: { name: 'omg' },
    // 子路由
    children: [
      {
        path: 'omg',
        name: 'omg',
        // meta: { requiresAuth: true },
        component: Omg
      },
      {
        path: 'kdy',
        name: 'kdy',
        component: Kdy
      },
      {
        path: 'lls',
        name: 'lls',
        component: Lls
      },
      {
        path: 'tissot',
        name: 'tissot',
        component: Tissot
      }
    ]
  }, {
    name: 'cart',
    path: '/cart',
    // 定义时传参：props
    // 1. Boolean方式：等效于<Cart v-bind="$route.params" />
    // props:true,
    // 2. Object方式：等效于<Cart v-bind="{pageName:'CartPage',step:1}" />
    // props:{pageName:'CartPage',step:1},
    // 3. Function方法：把函数返回值作为props
    props: function () {
      return { a: true, b: false, c: 100 }
    },
    meta: { requiresAuth: true },
    component: Cart, // <Cart a='10' b='20' />
  }, {
    name: 'goods',
    path: '/goods/:id', // 路径匹配/goods/xxx这个格式时，才渲染Goods组件
    component: Goods,
    beforeEnter(to, from, next) {
      console.log('beforeEnter')
      next();
    }
  }, {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound
  },
  // {
  //   path: '/*',
  //   // redirect:'/notfound',
  //   redirect: { name: 'NotFound' }
  // }
  ]
});

// 全局路由守卫
// 开始导航
router.beforeEach(function (to, from, next) {
  console.log('beforeEach=', to,from);

  // 判断当前路由是否需要登录权限
  // if(to.meta.requiresAuth){
  if(to.matched.some(item=>item.meta.requiresAuth)){
    // 判断是否登录
    if(store.getters.isLogin){
      next();
      request.get('/user/verify',{
        params:{},
        headers:{
          Authorization:store.state.user.userInfo.Authorization
        }
      }).then(({data})=>{
        if(data.code == 400){
          store.commit('logout');
          router.push({
            path:'/login',
            query:{
              redirectTo:to.fullPath
            }
          })
        }
      })
    }else{
      // next({
      //   path:'/login',
      //   query:{
      //     redirectTo:to.fullPath
      //   }
      // })
      router.push({
        path:'/login',
        query:{
          redirectTo:to.fullPath
        }
      })
    }
    
  }else{
    next();
  }
})

// 确认导航
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve=', to.path, from.path);
  next();
})
// 结束导航
router.afterEach(function (to, from) {
  console.log('afterEach=', to.path, from.path);
})

export default router;