import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import cart from './cart'



Vue.use(Vuex);


const store =  new Vuex.Store({
    // 全局数据
    state:{
        a:10,
        b:20
    },
    getters:{
        total(state){
            return state.a+state.b;
        }
    },
    mutations:{},
    actions:{},

    // 模块
    modules:{
        user,
        cart
    }
})

// 实例化一个store: 存储仓库
// const store = new Vuex.Store({
//     // 共享数据
//     state:{
//         user,
//         products:[
//             {id:1, name: '鼠标', price: 20},
//             {id:2, name: '键盘', price: 40},
//             {id:3, name: '耳机', price: 60},
//             {id:4, name: '显示屏', price: 80}
//         ],
//     },
//     // getters
//     getters:{
//         isLogin(state){
//             return !!state.user._id;
//         },
//         totalPrice(state){
//             return state.products.reduce((prev,item)=>prev+item.price,0);
//         }
//     },

//     // 修改数据唯一方式
//     mutations:{
//         login(state,user){
//             console.log('mutation=',state,user)
//             state.user = user;

//             // 存入本地
//             localStorage.setItem('user',JSON.stringify(user));
//         },
//         logout(state){
//             state.user = {}
//             localStorage.removeItem('user');
//         }
//     },

//     // 异步操作
//     actions:{
//         async login(context,payload){console.log('this=',this);
//             // 发起ajax请求注册.
//           const { data } = await request.get("/user/login", {
//             params: payload,
//           });
//           if (data.code == 200) {
//             router.replace("/home");

//             // 把用户信息保存到vuex
//             context.commit('login',data.data);
//           } else {
//             // this.$message.error("用户名或密码错误");
//             this.errMsg = '用户名或密码错误';
//           }
//         }
//     }
// })

export default store;
