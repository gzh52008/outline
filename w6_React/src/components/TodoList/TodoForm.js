import React from 'react'

import MyContext from './context'

class TodoForm extends React.Component{
    // 静态属性
    // 注意：ES6默认支持静态方法，但不支持静态属性
    static contextType = MyContext;

    // static go(){

    // }

    constructor(props){
         super(props);
         this.state = {
            todo:''
         }

         // 改变函数this指向
        //  this.add = this.add.bind(this);
        //  this.changeTodo = this.changeTodo.bind(this);
    }
    add = ()=>{
        this.props.addItem(this.state.todo);

        this.setState({
            todo:''
        });

        // 自动获取焦点
        this.element.focus();
    }
    changeTodo = (e)=>{
        this.setState({
            todo:e.currentTarget.value
        })
    }
     render(){
         const {todo} = this.state;
         return (
            <div className="form-item">
                <textarea className="form-control" value={todo} onChange={this.changeTodo} ref={el=>this.element=el}></textarea>
                <div className="mt-2 text-right">
                    <button className="btn btn-success" onClick={this.add}>添加</button>
                </div>
            </div>
         )
     }
 }

 // 静态属性
//  TodoForm.contextType = MyContext
// TodoForm.go = function(){}

export default TodoForm