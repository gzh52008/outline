import React from 'react'
import {Menu,Layout,Button} from 'antd'
import {withUser,withStorage,withStore} from '@/utils/hoc'

// import store from '@/store'


import Vue from './Vue'
import ReactComponent from './React'
import Node from './Node'
import jQuery from './jQuery'
import { Redirect,Route, Switch } from 'react-router-dom'

// ES7装饰器
// @withUser
// @withStorage('token')
// @withStore
@withStore()
class Discover extends React.Component{
    state = {
        menu:[{
            path:'/vue',
            text:'Vue'
        },{
            path:'/react',
            text:'React'
        },{
            path:'/node',
            text:'NodeJS'
        },{
            path:'/jq',
            text:'jQuery'
        }],
        current:'/vue'
    }
    goto = (e)=>{
        const {key} = e;
        const {url} = this.props.match
        this.props.history.push(url + key);
    }
    componentDidMount(){
        // store.subscribe(()=>{
        //     this.forceUpdate();
        // })
    }
    render(){
        const {menu,current} = this.state;
        const {match} = this.props;
        console.log('Discover.props',this.props);
        return (
            <Layout style={{backgroundColor:'#fff',margin:'0 -20px'}}>
                <Layout.Sider>
                <Menu
                    onClick={this.goto}
                    defaultSelectedKeys={[current]}
                    mode="inline"
                >
                    {
                        menu.map(item=><Menu.Item key={item.path}>{item.text}</Menu.Item>)
                    }
                    
                    
                </Menu>
               
                </Layout.Sider>
                <Layout.Content style={{padding:20}}>
                    <Switch>
                        <Route path={match.path + '/vue'} component={Vue} />
                        <Route path={match.path + '/react'} component={ReactComponent} />
                        <Route path={match.path + '/node'} component={Node} />
                        <Route path={match.path + '/jq'} component={jQuery} />
                        <Route path={match.path + '/nf'} render={()=><div>404</div>}/>
                        <Redirect from={match.path} to={match.path + '/vue'} exact />
                        <Redirect to={match.path + '/nf'} />
                    </Switch>
                </Layout.Content>
            </Layout>
        )
    }
}

// Discover = withUser(Discover)

export default Discover;