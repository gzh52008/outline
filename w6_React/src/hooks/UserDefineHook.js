import React from 'react';

import {useStorage} from '../utils/hooks'

function UserDefineHook(){
    const [userInfo,changeUser] = useStorage('user')
    return (
        <div>
            <h4>自定义Hook</h4>
            {JSON.stringify(userInfo)}
            <button className="btn btn-outline-primary" onClick={()=>{
                const newUser = {...userInfo,username:'jingjing plus'}
                changeUser(newUser)
            }}>修改</button>
            <button className="btn btn-outline-danger" onClick={()=>{
                changeUser('deleteUser')
            }}>删除</button>
        </div>
    )
}

export default UserDefineHook;