import React from 'react';
import store from '../store'
import Discover from '../views/Discover';

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
export function withStorage(key){
    return function(InnerComponent){
        return function OuterComponent(props){
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
// export const withStorage = (InnerComponent) => {
//     return class extends InnerComponent {
//       componentDidMount() {
//         let data = localStorage.getItem("data");
//         this.setState({ data });
  
//         // 调用父类生命周期函数，使之不被覆盖
//         super.componentDidMount();
//       }
  
//       render() {
//         // 调用父类render方法实现渲染
//         return super.render();
//       }
//     };
// };

// export function withStore(InnerComponent){
//     return class OuterComponent extends React.Component{
//         constructor(props){
//             super(props);
//             this.state = store.getState();
//         }
//         componentDidMount(){
//             store.subscribe(()=>{
//                 this.setState(store.getState())
//             })
//         }
//         render(){
//             return <InnerComponent dispatch={store.dispatch} {...this.props} {...this.state} />
//         }
//     }
// }
// withStore('money','userInfo')(Discover)
export function withStore(...keys){
    return function(InnerComponent){
        return class OuterComponent extends React.Component{
            constructor(props){
                super(props);

                this.state = this.filteData()
            }
            componentDidMount(){
                store.subscribe(()=>{
                    this.setState(this.filteData())
                })
            }
            filteData(){
                let reduxData = store.getState();
                let shareData = {}

                keys.forEach(key=>{
                    shareData[key] = reduxData[key]
                });
                return keys.length>0 ? shareData : reduxData;
            }
            render(){
                return <InnerComponent dispatch={store.dispatch} {...this.props} {...this.state} />
            }
        }
    }
}