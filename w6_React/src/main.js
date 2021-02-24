import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import Provider from './hooks/store';

ReactDOM.render(
    <Provider>
        <App/> 
    </Provider>
    ,
    document.querySelector('#app')
)