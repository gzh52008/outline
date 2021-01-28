import React from 'react'
import {render} from 'react-dom'
import {HashRouter,BrowserRouter,Route} from 'react-router-dom'

const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

import App from './App'
render(
    <Router>
        <App/>
        {/* <Route component={App} /> */}
    </Router>
    ,
    document.querySelector('#app')
)