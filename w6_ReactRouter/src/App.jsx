import React from 'react'
import {Route,Link,Redirect,Switch,NavLink,withRouter} from 'react-router-dom'
import { Menu } from 'antd';
import {
    HomeOutlined,
    LoginOutlined,
    UserOutlined,
  } from '@ant-design/icons';

import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'

import 'antd/dist/antd.css'
import './App.scss';

function App(props){
    console.log('App.props',props);
    const currentPath = props.location.pathname
    const nav = [{
        path:'/home',
        text:'首页',
        name:'home',
        icon:<HomeOutlined/>
    },{
        path:'/login',
        text:'登录',
        name:'login',
        icon:<LoginOutlined/>
    },{
        path:'/reg',
        text:'注册',
        name:'reg',
        icon:<UserOutlined/>
    }];
    const changeMenu = function({key}){
        props.history.push(key);
    }
    return <div>
        {/* <Link to="/home">首页</Link>
        <Link to="/login">登录</Link>
        <Link to="/reg">注册</Link> */}
        {/* {
            nav.map(item=><NavLink 
                key={item.name} 
                to={item.path}
                // activeStyle={{color:'#f00',fontWeight:'bold'}}
                activeClassName='active'
            >{item.text}</NavLink>)
        } */}
        <Menu mode="horizontal" theme="dark" onClick={changeMenu} defaultSelectedKeys={[currentPath]}>
            {
                nav.map(item=><Menu.Item 
                    key={item.path} 
                    icon={item.icon}
                >{item.text}</Menu.Item>)
            }
        </Menu>
        <Switch>
            {/* <Route path="/" component={Home} exact/> */}
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/reg" component={Reg}/>
           
            <Route path="/notfound" render={()=><div>404</div>}/>
            <Redirect from="/" to="/home" exact />
            {/* 404 */}
            {/* <Redirect from="*" to="/notfound" /> */}
            <Redirect to="/notfound" />
        </Switch>
    </div>
}

// withRouter高阶组件
App = withRouter(App)
export default App;