import React from 'react'
import { Form,Input,Checkbox,Button } from 'antd'
import { withUser } from '@/utils/hoc'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function Login(props) {
    console.log('Login.props', props)
    const rules = {
        username: [
            {
                required: true,
                message: '请输入用户名',
            },
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
            },
        ]
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>7天免登录</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        登录
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

Login = withUser(Login);

export default Login;