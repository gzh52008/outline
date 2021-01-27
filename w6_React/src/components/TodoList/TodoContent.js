import React from 'react'

import TodoItem from './TodoItem'

// 引入数据类型校验模块
import PropTypes from "prop-types";

function TodoContent({datalist}){
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

// props数据类型校验
TodoContent.propTypes = {
    datalist:PropTypes.array.isRequired,
    // 自定义校验规则
    age:(props, propName, componentName)=>{
        console.log('age=',props, propName, componentName)
        if (props[propName] < 18 || props[propName]>30) {
            return new Error(propName + "必须18-30岁之间");
          }
    }
}
// props默认值
TodoContent.defaultProps = {
    datalist:[]
}

export default TodoContent