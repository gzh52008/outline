import {createStore,applyMiddleware,compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'
import mySaga from './saga'

// 1.引入saga
import createSagaMiddleware from 'redux-saga';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 3.将 sagaMiddleware 连接至 Store
let enhancer = applyMiddleware(sagaMiddleware)

// let enhancer = compose(composeWithDevTools(),applyMiddleware(sagaMiddleware))

// const store = createStore(reducer,initState);
const store = createStore(reducer,composeWithDevTools(enhancer))

// 4.引入并运行自定义Saga配置
sagaMiddleware.run(mySaga);

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