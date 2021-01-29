import React from 'react'

import {withUser} from '@/utils/hoc'

function Reg(props){
    console.log('Reg.props',props)
    // let user = localStorage.getItem('user');
    // try{
    //     user = JSON.parse(user) || {}
    // }catch(e){
    //     user = user;
    // }
    return (
        <div>
            Reg
        </div>
    )
}

Reg = withUser(Reg);

export default Reg;