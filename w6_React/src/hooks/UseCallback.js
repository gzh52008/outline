import React,{useState,useCallback} from 'react'

let arr = []

function UseCallback(){
    const [qty,changeQty] = useState(1);
    const [flag,changeFlag] = useState(true);

    // 传统写法组件在刷新时，每次都会创建一个新的函数
    // const handleClick = function(){
    //     changeQty(qty+1);
    // }

    // useCallback默认写法：等效于以上用法
    // const handleClick = useCallback(()=>{
    //     changeQty(qty+1)
    // })
    // useCallback指定依赖：只有当依赖发生改变时返回新的函数，否则返回缓存函数
    // const handleClick = useCallback(()=>{
    //     changeQty(qty+1)
    // },[flag])

    // useCallback空依赖：初始化返回函数后并缓存，组件更新时永远返回缓存函数
    const handleClick = useCallback(()=>{
        console.log('qty=',qty);
        changeQty(qty+1)
    },[])
    arr.push(handleClick)
    console.log('对比两个函数',arr,arr[0]===arr[1]);


    return (
        <div>
            <h4>useCallback</h4>
            
            <button className="btn btn-outline-success" onClick={handleClick}>qty: {qty}</button>
            <button className="btn btn-outline-success" onClick={()=>{
                changeFlag(!flag);
            }}>flag: {flag ? 'true':'false'}</button>
        </div>
    )
}

export default UseCallback;
