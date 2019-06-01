import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {fakeAuth} from "../../util/fakeAuth";
import { Avatar,Menu, Dropdown, Icon} from 'antd';
import './index.css';
class Avatars extends Component{
    logout = ()=>{
        fakeAuth.signout();
        this.props.history.push('/login');
    }
    render(){
        const menu = (
            <Menu>
              <Menu.Item>
                <Link to="/">
                    <Icon type="user"></Icon>
                    <span className="label">个人中心</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/user">
                    <Icon type="setting"></Icon>
                    <span className="label">个人设置</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <div>
                    <Icon type="home"></Icon>
                    <span className="label" onClick={this.logout}>退出登录</span>
                </div>
              </Menu.Item>
            </Menu>
          );
        return (
            <div className="userInfo">
                <Dropdown overlay={menu} placement="bottomCenter" className="dropMenu">
                    <Avatar src="https://avatars1.githubusercontent.com/u/15929863?s=460&v=4" size="large"/>
                </Dropdown>
            </div>
        )
    }
}
export default withRouter(Avatars);