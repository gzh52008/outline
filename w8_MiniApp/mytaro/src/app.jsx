import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import 'taro-ui/dist/style/index.scss'
import './app.scss'

import store from './store'

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
