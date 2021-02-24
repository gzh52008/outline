import React,{useState,useContext, useCallback} from 'react'
import mycontext from './mycontext'

function UseContext(){
    const [qty,changeQty] = useState(1);
    const handleClick = useCallback(()=>{
        changeQty(qty+1)
    },[qty]);

    const user = useContext(mycontext)
    console.log('user=',user);
    
    return (
        <div>
            <h4>useContext</h4>
            {/* <mycontext.Consumer>
                {(value)=>{
                    return <div>用户信息：{JSON.stringify(value)}</div>
                }}
            </mycontext.Consumer> */}
            <button className="btn btn-outline-success" onClick={handleClick}>qty: {qty}</button>
        </div>
    )
}

export default UseContext;
