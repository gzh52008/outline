import React from 'react'

import {withUser} from '@/utils/hoc'

// ES7装饰器
@withUser
@witStorage('token')
class Discover extends React.Component{
    componentDidMount(){
        
    }
    render(){
        console.log('Discover.props',this.props)
        return (
            <div>Discover</div>
        )
    }
}

// Discover = withUser(Discover)

export default Discover;