import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import { withLogin } from '../utils/hoc';
const mapStateToProps = function(state){
    // state: redux中的state
    return {
        userInfo:state.userInfo,
        className:'2008'
    };
}
const mapDispatchToPorps = function(dispatch){
    return {
        changeUser(userInfo){
            dispatch({
                type:'changeuser',
                userInfo
            })
        }
    }
}
@withLogin
@connect(mapStateToProps,mapDispatchToPorps)
class Mine extends React.Component{
    componentDidMount(){
        
    }
    render(){
        console.log('Mine.props',this.props)
        const {userInfo,dispatch,changeUser} = this.props;
        return (
            <div>
                Mine
                <Button onClick={()=>{
                    // dispatch({
                    //     type:'changeuser',
                    //     userInfo:{username:'laoxie',password:123456,role:'admin'}
                    // })
                    changeUser({username:'laoxie',password:123456,role:'admin'})
                }}>{JSON.stringify(userInfo)}</Button>
            </div>
        )
    }
}

// mapStateToProps: 映射数据到组件props
// mapDispatchToProps：映射修改方法到组件props（默认映射dispatch到组件）
// Mine = connect(mapStateToProps,mapDispatchToPorps)(Mine)

export default Mine;