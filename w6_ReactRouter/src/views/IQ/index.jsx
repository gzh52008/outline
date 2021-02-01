import React from 'react'
import request,{baseURL} from '@/utils/request';
import {Avatar,Rate} from 'antd';
import {UserOutlined} from '@ant-design/icons'
import querystring from 'querystring';
// const querystring = require('querystring')
console.log(querystring.stringify({a:10,b:20,c:30}))

import './style.scss';

class IQ extends React.PureComponent{
    state = {
        data:{}
    }
    async componentDidMount(){
        console.log('IQ.props',this.props)
        let {match:{params:{id}},location:{search}} = this.props;
        const {data:{data}} = await request.get('/iq/'+id)
        this.setState({
            data
        });

        // 处理search参数
        search = search.slice(1);
        const res = querystring.parse(search);
        console.log('res',res);

        this.props.history.listen((location)=>{
            console.log('change',location)
        })
    }
    render(){
        const {data} = this.state;
        return (
            <div>
                <h1>{data.question}</h1>
                <div>
                    {
                        data.user?
                        <>
                            <Avatar 
                                icon={<UserOutlined />}
                                src={ baseURL + data.user.avatar}
                                size="small"
                            ></Avatar>{data.user.username}
                        </>
                        :
                        null
                    }

                    {data.hot}浏览

                    难度：<Rate disabled value={data.difficulty} />
                </div>
            </div>
        )

    }
   
}


export default IQ;