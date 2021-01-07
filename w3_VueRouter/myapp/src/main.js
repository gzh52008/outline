import Vue from 'vue'
import App from './App.vue'

import router from './router'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  // 4. 注入根实例
  router,
  render: h => h(App),
}).$mount('#app')
