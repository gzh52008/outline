import React from 'react'
import request from '@/utils/request';
import {List} from 'antd'
import {RightOutlined} from '@ant-design/icons'


// function Home(props){
//     console.log('Home.props',props);

    
//     return (
//         <div>
//             Home
//         </div>
//     )
// }

class Home extends React.PureComponent{
    state = {
        newList:[]
    }
    // 实例方法
    getData = ()=>{

    }

    // 原型方法
    goto = (path)=>{
        // this.props.history.push(path);
        this.props.history.push({
            pathname:path,
            search:'?id=123&a=10',
            state:{
                username:'laoxie',
                password:123456
            },
        });
    }
    async componentDidMount(){
        const {data} = await request.get('/iq')
        this.setState({
            newList:data.data.result
        });
    }
    render(){
        const {newList} = this.state;
        return (
            <div>
                <h4>最新面试题</h4>
                 <List
                    itemLayout="horizontal"
                    dataSource={newList}
                    split
                    // Render Props
                    renderItem={item => (
                        <List.Item onClick={this.goto.bind(this,'/iq/'+item._id)}>
                            <List.Item.Meta
                            title={<>{item.question}</>}
                            description={<div>{item.hot}浏览 {item.answer}回答</div>}
                            />
                            <div><RightOutlined /></div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Home;