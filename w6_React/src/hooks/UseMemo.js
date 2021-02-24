import React,{useState,useMemo} from 'react'

function UseMemo(){
    const [qty,changeQty] = useState(1);
    let [goodslist,changeGoodslist] = useState([
        { name: "goods1", price: 98, qty: 2 },
        { name: "goods2", price: 198, qty: 2 },
        { name: "goods3", price: 998, qty: 1 },
    ]);

    // console.log('计算总价')
    // let totalPrice = goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)

    // 默认用法：等效于以上用法
    // let totalPrice = useMemo(()=>{
    //     console.log('默认用法')
    //     return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    // })
    
    // 指定依赖：只有在依赖被修改时才重新执行useMemo中的代码，否在从缓存中读取结果
    let totalPrice = useMemo(()=>{
        console.log('指定依赖')
        return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[goodslist])

    // 空依赖：只执行一次，后面的结果都是从缓存中读取
    // let totalPrice = useMemo(()=>{
    //     console.log('空依赖')
    //     return goodslist.reduce((prev,item)=>prev+item.price*item.qty,0)
    // },[])
    return (
        <div>
            <h4>useMemo</h4>
            <ul>
                {
                    goodslist.map(item=><li key={item.name}>
                        <h4>{item.name}</h4>
                        <p className="price">￥{item.price} &times; {item.qty}</p>
                    </li>)
                }
            </ul>
            <p>总价：{totalPrice}</p>
            <button className="btn btn-outline-success" onClick={()=>{
                changeQty(qty+1);
            }}>qty: {qty}</button>
            <button className="btn btn-outline-success" onClick={()=>{
                let newGoods = {name:'goodsX',price:998,qty:1}
                goodslist = [newGoods,...goodslist];
                changeGoodslist(goodslist);
            }}>添加商品</button>
        </div>
    )
}

export default UseMemo;
