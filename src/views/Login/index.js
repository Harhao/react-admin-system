import React,{Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {fakeAuth} from '../../util/fakeAuth';
import loginBg from '../../assets/images/login_bg.svg';
import Logo from '../../assets/images/logo.svg';
import Name from '../../assets/images/name.svg';
import './index.css';

class LoginForm extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            fakeAuth.setToken("zxcvbnmasdfghjkl");
            this.props.history.push('/dataCount');
            message.success('登陆成功',1);
            return;
          }
        });
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginWrap">
                <div className="contentWrap">
                    <div className="leftSide">
                        <img src={loginBg} className="loginBg" alt="login"/>
                    </div>
                    <div className="loginForm">
                        <div className="title">
                            <img src={Logo} alt="Ant Design后台管理系统" className="logo"/>
                            <img src={Name} alt="Ant Design后台管理系统" className="name"/>
                        </div>
                        <div className="dataWrap">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名' }],
                                    })(
                                        <Input
                                        size="large"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入用户账号"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入密码' }],
                                    })(
                                        <Input
                                        size="large"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="请输入密码"
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(<Checkbox>记住密码</Checkbox>)}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Form.create({ name: 'loginForm' })(LoginForm));