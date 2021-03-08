import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import { AtButton,AtTabBar } from 'taro-ui'
import Taro from '@tarojs/taro'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  state = {
    qty:1,
    current:0,
    tabList:[
      { title: '首页', iconType: 'home', text: 'new',path:'/pages/index/index' },
      { title: '拍照', iconType: 'camera',path:'/pages/camera/camera' },
      { title: '我的', iconType: 'user', text: '100', max: 99 ,path:'/pages/mine/mine'}
    ]
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counter,user,cart } = this.props.store
    counter.increment(),
    cart.add2cart(123)
  }

  decrement = () => {
    const { counter } = this.props.store
    counter.decrement()
  }

  incrementAsync = () => {
    const { counter } = this.props.store
    counter.incrementAsync()
  }

  handleClick = (idx)=>{
    const currentTab = this.state.tabList[idx];
    this.setState({
      current:idx
    })
    console.log(currentTab.path)
    Taro.navigateTo({
      url:currentTab.path
    })
  }

  render () {
    console.log('store',this.props.store)
    const { counter: { counter } } = this.props.store
    const {qty,tabList,current} = this.state;
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <View>qty:{qty}</View>
        <AtButton type="primary" onClick={()=>{
          this.setState({
            qty:qty+1
          })
        }}>修改qty</AtButton>

        <AtTabBar
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
          current={current}
        />
      </View>
    )
  }
}

export default Index
