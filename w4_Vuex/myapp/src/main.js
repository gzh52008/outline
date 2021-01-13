import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {request} from './utils'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 把ajax请求方法写入Vue原型，方便在组件中使用
Vue.prototype.$ajax = request;

new Vue({
  // 4. 注入根实例
  router,
  // 把store注入到根实例
  store,
  render: h => h(App),
}).$mount('#app')
