import React from 'react'
import classNames from 'classnames'

import MyContext from './context'

function TodoItem({item,idx}){
    return (
       <tr className={classNames({'table-success':item.complete})}>
           <th>{idx+1}</th>
           <td>{item.todo}</td>
           <td>{item.complete ? '是':'否'}</td>
           <td>
               <MyContext.Consumer>
                   {
                       (value)=>{
                           console.log('value=',value);
                           return (
                               <React.Fragment>
                                   <button className="btn btn-outline-primary btn-sm" onClick={value.complete.bind(null,item.id)}>完成</button>
                                   <button className="btn btn-outline-danger btn-sm" onClick={value.remove.bind(null,item.id)}>删除</button>
                               </React.Fragment>
                           )
                       }
                   }
               </MyContext.Consumer>
           </td>
       </tr>
    )
}

export default TodoItem