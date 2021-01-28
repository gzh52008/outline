import React from 'react'

// class Lifecircle extends React.Component{
class Lifecircle extends React.PureComponent{
    constructor(props){
        console.log('Lifecircle.constructor');
        super(props);
        this.state = {
            num:1
        }
    }
    UNSAFE_componentWillMount(){
        console.log('Lifecircle.componentWillMount');
    }
    componentDidMount(){
        console.log('Lifecircle.componentDidMount');
    }
    componentWillUpdate(){
        console.log('Lifecircle.componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('Lifecircle.componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('Lifecircle.componentWillUnmount');
    }
    // componentWillReceiveProps(){
        
    // }

    // 一般用户优化性能
    shouldComponentUpdate(nextProps, nextState){
        // this.props与nextProps的区别
        // this.state与nextState的区别
        console.log('Lifecircle.shouldComponentUpdate',this.state.num,nextState.num);
        if(nextState.num %5===0){
            return true
        }else{
            return false;

        }
    }
    render(){
        console.log('Lifecircle.render');
        const {num} = this.state;
        return <div className="container">
            <h4>生命周期函数测试</h4>
            <button className="btn btn-success" onClick={()=>{
                this.setState({
                    num:this.state.num+1
                })
            }}>{num}</button>
        </div>
    }
}

export default Lifecircle;