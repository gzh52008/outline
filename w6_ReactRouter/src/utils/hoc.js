import React from 'react';

// 定义高阶组件方式一：属性代理
export function withUser(InnerComponent){
    // 参数为组件，并返回新的组件
    // return function OuterComponent(props){
    //     console.log('OuterComponent',props)
    //     let user = localStorage.getItem('currentUser');
    //     try{
    //         user = JSON.parse(user) || {}
    //     }catch(e){
    //         user = user;
    //     }
    //     return <InnerComponent user={user} {...props} />
    // }

    return class OuterComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                user:{}
            }
        }
        componentDidMount(){
            let user = localStorage.getItem('currentUser');
            try{
                user = JSON.parse(user) || {}
            }catch(e){
                user = user;
            }
            this.setState({
                user
            })
        }
        render(){
            let {user} = this.state;
            return <InnerComponent user={user} {...this.props} />
        }
    }
}

// 具有参数的高阶组件
function withStorage(key){
    return function(InnerComponent){
        return function OuterComponent(){
                 let data = localStorage.getItem(key);
            try{
                data = JSON.parse(data) || {}
            }catch(e){
                data = data;
            }
            let propData = {
                [key]:data
            }
            return <InnerComponent {...propData} {...props} />
        }
    }
}
// App = withStorage('currentUser')(App)
// App = withStorage('token')(App)
// 函数柯里化

// 定义高阶组件方式一：反向继承
export const withStorage = (InnerComponent) => {
    return class extends InnerComponent {
      componentDidMount() {
        let data = localStorage.getItem("data");
        this.setState({ data });
  
        // 调用父类生命周期函数，使之不被覆盖
        super.componentDidMount();
      }
  
      render() {
        // 调用父类render方法实现渲染
        return super.render();
      }
    };
};
