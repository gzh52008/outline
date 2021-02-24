import React,{useState,useEffect,useLayoutEffect} from 'react'

function UseEffect(){
    let [qty,changeQty] = useState(0);
    let [num,changeNum] = useState(10);

    // useEffect中的代码在组件渲染完成后执行

    // 用法一：默认用法，等效于componentDidMount+componentDidUpdate
    // useEffect(()=>{
    //     // 初始化和刷新时都执行
    //     console.log('useEffect')
    // });
    
    // 用法二：依赖，等效于componentDidUpdate
    useEffect(()=>{
        // 这里的代码，在初始化和qty改变时才执行
        console.log('qty change')
    },[qty])

    // 用法三：空依赖，等效于componentDidMount
    useEffect(()=>{
        // 这里的代码，在初始化时执行
        console.log('空依赖')
    },[])

    // 用法四：Effect中返回一个函数，等效于componentWillUnmount
    useEffect(()=>{
        // 发起ajax
        return function(){
            // 这里的代码在组件销毁时执行
            console.log('Effect中返回一个函数')
            // 取消ajax
        }
    })

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    })

    console.log('return')
    return (
        <div>
            <h4>useEffect</h4>
            <button className="btn btn-outline-success" onClick={()=>{
                changeQty(qty+1);
            }}>qty: {qty}</button>
            <button className="btn btn-outline-warning" onClick={()=>{
                changeNum(num+1);
            }}>num: {num}</button>
        </div>
    )
}

export default UseEffect;