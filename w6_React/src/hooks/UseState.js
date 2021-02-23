import React,{useState} from 'react'

function UseState(){
    // useState(initState)，返回一个数组：[state,修改state的方法]
    // 调用修改方法，函数组件会自动刷新
    const [qty,changeQty] = useState(1);

    // ajax().then(()=>{
    //     changeQty()
    // })

    return (
        <div>
            <h4>useState</h4>
            <button className="btn btn-outline-success" onClick={()=>{
                changeQty(qty+1);
            }}>qty: {qty}</button>
        </div>
    )
}

export default UseState;


// class UseState extends React.Component{
//     constructor(){
//         this.state = {
//             qty:1
//         }
//     }
//     render(){
//         const {qty} = this.state;
//         return (
//             <div>
//                 <button onClick={()=>{
//                     this.setState({
//                         qty:qty+1
//                     })
//                 }}>{qty}</button>
//             </div>
//         )
//     }
// }