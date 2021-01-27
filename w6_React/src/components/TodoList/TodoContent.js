import React from 'react'

import TodoItem from './TodoItem'

function TodoConent({datalist}){
    const completeList = datalist.filter(item=>item.complete);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>代办事项</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item,idx)=><TodoItem key={item.id} item={item} idx={idx}></TodoItem>)
                    }
                    
                </tbody>
            </table>
            <div className="p-2 mb-3">代办事项：{datalist.length}, 完成：{completeList.length}，未完成：{datalist.length-completeList.length}</div>
       </>
    )
}

export default TodoConent