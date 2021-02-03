// dispatch({type:'login',userInfo})
// dispatch(login(userInfo))
// dispatch({type:'CHANGE_USERNAME_ASYNC',userInfo})
// dispatch(changeUser(userInfo))

export const LOGIN = 'login' 
export const LOGOUT = 'logout' 
export const CHANGE_USERNAME = 'CHANGE_USERNAME' 
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD' 

export function login(userInfo){
    return {
        type:LOGIN,
        userInfo
    }
}
export function logout(){
    return {
        type:LOGOUT,
    }
}
export function changeUser(userInfo){
    return {
        type:CHANGE_USERNAME,
        userInfo
    }
}
export function changePassword(password){
    return {
        type:CHANGE_PASSWORD,
        password
    }
}

export default {
    login,
    logout,
    changeUser,
    changePassword
}