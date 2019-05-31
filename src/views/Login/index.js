import React,{Component } from 'react';
import loginBg from '../../assets/images/login_bg.svg';
import './index.css';
export default class Login extends Component{
    handleChange = ()=>{

    }
    render(){
        return (
            <div className="loginWrap">
                <div className="contentWrap">
                    <div className="leftSide">
                        <img src={loginBg} className="loginBg" alt="login"/>
                    </div>
                    <div className="loginForm">
                        <div className="title">
                            登录Ant Design管理系统
                        </div>
                        <div className="dataWrap">
                            <div className="userName">
                                <label htmlFor="name">用户名:</label>
                                <input type="text" value="" id="name" onChange={this.handleChange}/>
                            </div>
                            <div className="password">
                                <label htmlFor="name">密   码:</label>
                                <input type="text" value="" id="name" onChange={this.handleChange}/>
                            </div>
                            <button className="loginBtn">登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}