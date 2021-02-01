import React from 'react'

import {withUser,withStorage} from '@/utils/hoc'

// ES7装饰器
@withUser
@withStorage('token')
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