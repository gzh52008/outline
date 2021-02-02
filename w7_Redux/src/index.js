import React from 'react'
import {render} from 'react-dom'
import {HashRouter,BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter
const MyContext = React.createContext()
import App from './App'
render(
    <Provider store={store}>
        <Router>
            <App/>
            {/* <Route component={App} /> */}
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)