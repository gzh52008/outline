import {createStore} from 'redux'

const initState = {
    userInfo:{
        username:'jingjing',
        password:123,
        role:'svip'
    },
    token:'laoxiejingjingtiantianzeze',
    money:300000
}

const reducer = function(state=initState,action){
    // 定义修改state的逻辑
    switch(action.type){
        case 'changeusername':
            // state.userInfo.username = action.username
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    username:action.username
                }
            }
        case 'changepassword':
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    password:action.password
                }
            }
        case 'changemoney':
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                },
                money:action.money
            }
        case 'changeuser':
            return {
                ...state,
                userInfo:action.userInfo
            }
    }
    return state;
}

// const store = createStore(reducer,initState)
const store = createStore(reducer)

// 监听修改，state只要有修改，就执行回调函数
store.subscribe(()=>{
    console.log(666,store.getState())
})
store.subscribe(()=>{
    console.log(777,store.getState())
})
store.subscribe(()=>{
    console.log(888,store.getState())
})

console.log('store',store);
console.log('state',store.getState());

export default store;