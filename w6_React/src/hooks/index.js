import React,{useState,useReducer,useContext} from 'react'
import mycontext from './mycontext'

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'
import UseReducer from './UseReducer'
import UserDefineHook from './UserDefineHook'

import {myContext} from './store'

function Hook(){
    let [show,setShow] = useState(true);
    const [state,dispatch] = useContext(myContext);
    return (
        
            <mycontext.Provider value={{username:'laoxie',password:123456}}>
            <div className="hooks container mt-5">
                <h4>Hooks</h4>
                {/* {JSON.stringify(state)} */}
                {/* <UseState/> 
                {
                    show ? 
                    <UseEffect/>
                    :
                    <div>销毁UseEffect</div>
                }
                <button className="btn btn-outline-danger" onClick={()=>{
                    setShow(!show);
                }}>{show ? '隐藏': '显示'}UseEffect</button>
                <UseMemo/>
                <UseCallback/>
                <UseContext/>
                <UseReducer/> */}
                <UserDefineHook/>
            </div>
            </mycontext.Provider>
    )
}


export default Hook;