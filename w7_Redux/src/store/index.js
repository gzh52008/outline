import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'

// const store = createStore(reducer,initState);
const store = createStore(reducer,composeWithDevTools())

// 监听修改，state只要有修改，就执行回调函数
// store.subscribe(()=>{
//     console.log(666,store.getState())
// })
// store.subscribe(()=>{
//     console.log(777,store.getState())
// })
// store.subscribe(()=>{
//     console.log(888,store.getState())
// })

// console.log('store',store);
console.log('state',store.getState());

export default store;