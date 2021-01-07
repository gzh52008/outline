// import Vue from 'vue/dist/vue'
import Vue from 'vue'
import App from './App.vue'


// // 导入模块对象中的所有属性，并复制给obj对象
// import * as obj from './utils/request'

// // 导入<模块对象>中的default属性，并赋值给a变量
// import a from './utils/request'

// // 导入模块对象中的baseUrl属性，并赋值给baseUrl变量
// import {baseUrl} from './utils/request';

// // 导入模块对象中的baseUr属性，并赋值给myUrl变量（一般用于变量冲突）
// import {baseUrl as myUrl} from './utils/request';

// console.log(obj,a,baseUrl,myUrl);

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  // el -> template -> render
  render:function(createElement){console.log('App=',App)
    // 虚拟DOM
    return createElement(App)
  }
}).$mount('#app')
