import { call, apply, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {myapi} from '@/utils/request'

function * changeUser(action){
    console.log('changeUser',action)
    // 发起ajax请求，获取用户信息
    // const {data} = yield myapi.get('/user/'+action.id);
    const {data} = yield call(myapi.get,'/user/'+action.id);
    
    // ajax请求数据返回后，触发reducer action
    put({
        type:'login',
        userInfo:data.data
    });
}

function * changeQty(action){
    // const {data} = yield myapi.get('/goods/'+action.id)
    const {data} = yield call(myapi.get,'/goods/'+action.id)
    if(data.data.kucun < action.qty){
        action.qty = data.data.kucun
    }

    put({
        type:'CHANGE_GOODS_QTY',
        id:action.id,
        qty:action.qty
    })
}

function * init(){
    console.log('hello saga')
    // 监听saga action
    // 多次操作，每次都生效
    yield takeEvery('CHANGE_USERNAME_ASYNC',changeUser)

    // 多次操作只生效最后一次
    yield takeLatest('CHANGE_GOODS_QTY_ASYNC',changeQty)
}


export default init;

// dispatch({
//     type:'CHANGE_USERNAME_ASYNC'
// })