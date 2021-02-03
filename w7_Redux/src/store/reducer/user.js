import {LOGIN,LOGOUT,CHANGE_PASSWORD,CHANGE_USERNAME} from '../actions/user'

// 数据持久化
// 刷新页面重新获取本地数据，并写入初始state
let userInfo = localStorage.getItem('userInfo');// {},null,xxxx
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

const initState = {
    userInfo
}

const reducer = function(state=initState,action){
    // 定义修改state的逻辑
    switch(action.type){
        case CHANGE_USERNAME:
            // state.userInfo.username = action.username
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    username:action.username
                }
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                userInfo:{
                    ...state.userInfo,
                    password:action.password
                }
            }
        case LOGIN:
            // 存入本地
            localStorage.setItem('userInfo',JSON.stringify(action.userInfo))
            return {
                ...state,
                userInfo:action.userInfo
            }
        case LOGOUT:
            localStorage.removeItem('userInfo')
            return {
                ...state,
                userInfo:{}
            }
        default:
            return state;

    }
}

export default reducer;