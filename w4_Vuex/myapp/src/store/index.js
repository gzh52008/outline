import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 数据持久化：利用本地存储+Vuex实现
let user = localStorage.getItem('user');
try{
    user = JSON.parse(user) || {};
}catch(err){
    user = {}
}

// 实例化一个store: 存储仓库
const store = new Vuex.Store({
    // 共享数据
    state:{
        user,
        products:[
            {id:1, name: '鼠标', price: 20},
            {id:2, name: '键盘', price: 40},
            {id:3, name: '耳机', price: 60},
            {id:4, name: '显示屏', price: 80}
        ],
    },
    // getters
    getters:{
        isLogin(state){
            return !!state.user._id;
        },
        totalPrice(state){
            return state.products.reduce((prev,item)=>prev+item.price,0);
        }
    },

    // 修改数据
    mutations:{
        login(state,user){
            console.log('mutation=',state,user)
            state.user = user;

            // 存入本地
            localStorage.setItem('user',JSON.stringify(user));
        },
        logout(state){
            state.user = {}
            localStorage.removeItem('user');
        }
    }
})

export default store;
