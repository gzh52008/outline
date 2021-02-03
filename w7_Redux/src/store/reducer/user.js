const initState = {
    userInfo:{
        username:'jingjing',
        password:123,
        role:'svip'
    },
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
        case 'login':
            return {
                ...state,
                userInfo:action.userInfo
            }
        case 'logou':
            return {
                ...state,
                userInfo:{}
            }
        default:
            return state;

    }
}

export default reducer;