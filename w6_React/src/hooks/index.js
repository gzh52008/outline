import React,{useState} from 'react'

import UseState from './UseState'
import UseEffect from './UseEffect'

function Hook(){
    let [show,setShow] = useState(true);
    return (
        <div className="hooks container mt-5">
            <h4>Hooks</h4>

            <UseState/>
            {
                show ? 
                <UseEffect/>
                :
                <div>销毁UseEffect</div>
            }
            <button className="btn btn-outline-danger" onClick={()=>{
                setShow(!show);
            }}>{show ? '隐藏': '显示'}UseEffect</button>
        </div>
    )
}


export default Hook;