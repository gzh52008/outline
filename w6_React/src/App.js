import React from 'react';

import TodoList from './components/Todolist'
import RenderProp from './components/RenderProp'
import Lifecircle from './components/Lifecircle'
import Hook from './hooks'

function App(){
    return (
        <div className="container-fluid">
            {/* <TodoList/> */}
            {/* <RenderProp username="laoxie" renderHeader={(user)=>{
                return (
                    <div>
                        <h4>用户名：{user.name}</h4>
                        <p>年龄:{user.age}</p>
                        <p>性别:{user.gender}</p>
                    </div>
                )
            }}>
                {
                    (data)=>{
                        return <div>main</div>
                    }
                }

            </RenderProp> */}
            {/* <Lifecircle/> */}
            <Hook/>
            {/* <button onClick={()=>{
                if(window.plus){
                    const cmr = plus.camera.getCamera(1)
                }
            }}>拍照</button> */}
        </div>
    )
}

export default App