import React, { useState, useReducer, useMemo, useCallback,useRef,useContext } from 'react'

import {myContext} from './store'

// const initState = [
//     { id: 1, name: "goods1", price: 98, qty: 2 },
//     { id: 2, name: "goods2", price: 198, qty: 2 },
//     { id: 3, name: "goods3", price: 998, qty: 1 },
// ];
// const reducer = function (state, action) {
//     switch (action.type) {
//         // action:{type:'add',goods}
//         case 'add':
//             return [action.goods, ...state];

//         // action:{type:'remove',id}
//         case 'remove':
//             return state.filter(item => item.id != action.id)
//         case 'clear':
//             return []
//     }
// }

function UseReducer() {
    const [qty, changeQty] = useState(1);
    const [goodsName, setGoodsName] = useState('');
    // const inputRef = React.createRef();
    const inputRef = useRef();

    // const [state, dispatch] = useReducer(reducer, initState);
    const [state,dispatch] = useContext(myContext);

    const totalPrice = useMemo(() => {
        return state.reduce((prev, item) => prev + item.price * item.qty, 0)
    }, [state]);

    const handleClick = useCallback(() => {
        changeQty(qty + 1);
        // changeQty(prev =>prev+1)
    }, [qty]);

    const add2Cart = useCallback(()=>{
        const goods = {id:parseInt(Math.random()*10000),name:goodsName,price:998,qty:1}
        dispatch({type:'add',goods});

        // 清空并获得焦点
        setGoodsName('');
        inputRef.current.focus();

    },[goodsName]);

    const removeGoods = useCallback((id)=>{
        dispatch({type:'remove',id})
    },[]);

    const clearCart = useCallback(()=>{
        dispatch({type:'clear'})
    },[]);

    const changeGoodsName = useCallback((e)=>{
        setGoodsName(e.target.value)
    },[]);

    return (
        <div>
            <h4>useReducer</h4>
            <ul>
                {
                    state.map(item => <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p className="price">￥{item.price} &times; {item.qty}</p>
                        <button className="btn btn-outline-danger btn-sm" onClick={removeGoods.bind(null,item.id)}>删除</button>
                    </li>)
                }
            </ul>
            <button className="btn btn-outline-danger" onClick={clearCart}>清空</button>
            <p>总价：{totalPrice}</p>
            <button className="btn btn-outline-success" onClick={handleClick}>qty: {qty}</button>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="请输入商品名称" value={goodsName} onChange={changeGoodsName} ref={inputRef} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={add2Cart}>添加商品</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer;
