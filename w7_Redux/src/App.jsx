import React from 'react'
import { Route, Link, Redirect, Switch, NavLink, withRouter } from 'react-router-dom'
import { Menu, Layout, Row, Col, Button, Avatar } from 'antd';
import {
    HomeOutlined,
    LoginOutlined,
    UserOutlined,
    EyeOutlined,
} from '@ant-design/icons';

import Home from './views/Home'
import Login from './views/Login'
import Reg from './views/Reg'
import Discover from './views/Discover'
import Mine from './views/Mine'
import IQ from './views/IQ'

import 'antd/dist/antd.css'
import './App.scss';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { baseURL } from '@/utils/request'
import userAction from './store/actions/user'
function App(props) {
    console.log('App.props', props);
    const currentPath = props.location.pathname
    const nav = [{
        path: '/home',
        text: '首页',
        name: 'home',
        icon: <HomeOutlined />
    }, {
        path: '/discover',
        text: '发现',
        name: 'discover',
        icon: <EyeOutlined />
    }, {
        path: '/mine',
        text: '我的',
        name: 'mine',
        icon: <UserOutlined />
    },
        // {
        //     path:'/login',
        //     text:'登录',
        //     name:'login',
        //     icon:<LoginOutlined/>
        // },{
        //     path:'/reg',
        //     text:'注册',
        //     name:'reg',
        //     icon:<UserOutlined/>
        // }
    ];
    const changeMenu = function ({ key }) {
        props.history.push(key);
    }
    const goto = function (path, e) {
        console.log('path', path, e);
        props.history.push(path)
    }
    return <Layout>
        <Layout.Header style={{ padding: 0 }}>
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
            <Row gutter={10}>
                <Col span={16}>
                    <Menu mode="horizontal" theme="dark" onClick={changeMenu} defaultSelectedKeys={[currentPath]}>
                        {
                            nav.map(item => <Menu.Item
                                key={item.path}
                                icon={item.icon}
                            >{item.text}</Menu.Item>)
                        }
                    </Menu>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                    {
                        props.userInfo.username ?
                            <>
                                <Avatar
                                    icon={<UserOutlined />}
                                    src={baseURL + props.userInfo.avatar}
                                    size="small"
                                ></Avatar>
                                <Button type="link" size="small" style={{color:'#fff'}}>{props.userInfo.username}</Button>
                                <Button type="link" size="small" onClick={props.logout}>退出</Button>
                            </>
                            :
                            <>
                                <Button type="link" onClick={goto.bind(null, '/login?redirectTo='+props.location.pathname)}>登录</Button>
                                <Button type="link" onClick={goto.bind(null, '/reg')}>注册</Button>
                            </>
                    }
                </Col>
            </Row>

        </Layout.Header>
        <Layout.Content style={{ padding: 20, backgroundColor: '#fff' }}>
            <Switch>
                {/* <Route path="/" component={Home} exact/> */}
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/reg" component={Reg} />
                <Route path="/discover" component={Discover} />
                <Route path="/mine" component={Mine} />
                <Route path="/iq/:id" component={IQ} />

                <Route path="/notfound" render={() => <div>404</div>} />
                <Redirect from="/" to="/home" exact />
                {/* 404 */}
                {/* <Redirect from="*" to="/notfound" /> */}
                <Redirect to="/notfound" />
            </Switch>
        </Layout.Content>
        <Layout.Footer>
            &copy; 版权归属
        </Layout.Footer>
    </Layout>
}

const mapStateToProps = function (state) {
    return {
        userInfo: state.user.userInfo
    }
}
const mapDispatchToProps = function (dispatch) {
    // return {
    //     logout() {
    //         // dispatch({ type: 'logout' })
                // 利用action create简化操作
    //         dispatch(userAction.logout())
    //     }
    // }

    // 利用bindActionCreators简化操作
    // 原理：把ActionCreator中默认导出的所有方法(export default中的方法)绑定到组件props并自动隐式调用dispatch(action)）
    return bindActionCreators(userAction,dispatch)
    // return {
    //     login(){
    //         dispatch(login())
    //     },
    //     logout(){
    //         dispatch(logout())
    //     }
    // }
}
App = connect(mapStateToProps, mapDispatchToProps)(App)

// withRouter高阶组件
App = withRouter(App)
export default App;