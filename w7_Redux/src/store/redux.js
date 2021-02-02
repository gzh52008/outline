// import {createStore} from 'redux'
// const store = createStore(reducer,initState)
// {getState,dispatch,subscribe,replaceReducer}

// 简化版redux（为了了解redux的原理）

export function createStore(reducer,initState){
    let state = initState || reducer();

    let listeners = [];

    // 获取最新state
    const getState = function(){
        return state;
    }

    // 修改state方法
    const dispatch = function(action){
        state = reducer(state,action);

        // 发布
        listeners.forEach(listener=>{
            listener()
        })
    }

    // 监听修改（订阅）
    const subscribe = function(listener){
        listeners.push(listener);
    }

    // 替换reducer
    const replaceReducer = function(newReducer){
        reducer = newReducer;
    }

    return {
        getState,
        dispatch,
        subscribe,
        replaceReducer,
    }
}