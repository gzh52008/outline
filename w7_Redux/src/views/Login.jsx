import React from 'react'

import {withUser} from '@/utils/hoc'

function Login(props){
    console.log('Login.props',props)
   
    return (
        <div>
            Login
        </div>
    )
}

Login = withUser(Login);

export default Login;