import React,{Component} from 'react'

// 引入样式
import './todolist.scss';
import 'bootstrap/dist/css/bootstrap.css';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'

import MyContext from './context'


class TodoList extends Component{
    constructor(){
        super();
        this.state = {
           datalist: [{
               id: 1,
               todo: '定个小目标睡一整天',
               complete: true
           }, {
               id: 2,
               todo: '赚他一个亿',
               complete: false
           }, {
               id: 3,
               todo: '迎娶白富美，达到人生巅峰',
               complete: false
           }, {
               id: 4,
               todo: '出人CEO，达到疯癫状态',
               complete: false
           }],
       }
       // 推荐在初始化时改变this指向
    //    this.addItem = this.addItem.bind(this);
    //    this.removeItem = this.removeItem.bind(this);
    //    this.completeItem = this.completeItem.bind(this);
    }
    addItem = (todo)=>{
        const {datalist} = this.state;
        const newData = {
            id:parseInt(Math.random()*10000),
            todo,
            complete:false,
            addtime:Date.now()
        }
        this.setState({
           datalist:[newData,...datalist]
        })
    }
    removeItem = (id)=>{
       let {datalist} = this.state;
       datalist = datalist.filter(item=>item.id!=id);
       this.setState({
           datalist
       })
    }
    completeItem = (id)=>{
       let {datalist} = this.state;
       datalist = datalist.map(item=>{
           if(item.id == id){
               item.complete = true
           }
           return item;
       })
       this.setState({
           datalist
       })
    }
    render(){
        const {datalist} = this.state;
        const contextData = {
            remove:this.removeItem,
            complete:this.completeItem
       };
       return(
           <div className="container">
               {/*利用Provider的value属性共享数据*/}
               <MyContext.Provider value={contextData}>
                   <TodoContent datalist={datalist}/>
                   <TodoForm addItem={this.addItem}/>
               </MyContext.Provider>
           </div>
       )
    }
}

export default TodoList;