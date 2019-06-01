import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Logo from '../../assets/images/logo.svg';
import './index.css';
const { Sider } = Layout;
const {SubMenu } = Menu;
export default class SiderNav extends Component{
    state = {
        collapsed: false,
    };
    
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    render(){
        return(
            <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logoIcon">
                        <img src={Logo} alt="system" className ="Icon"/>
                        <span className="title">React System</span>
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Link to="/dataCount">
                                <Icon type="pie-chart" />
                                <span className="navTitle">
                                        数据统计
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/basic">
                                <Icon type="desktop" />
                                <span className="navTitle">
                                    基本组件
                                </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/form">
                                <Icon type="inbox" />
                                <span>输入组件</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <Icon type="appstore" />
                                <span>反馈提示</span>
                            </span>
                            }
                        >
                            <Menu.Item key="9">
                                <Link to="/alert">Alert警告提示</Link>
                            </Menu.Item>
                            <Menu.Item key="10">
                                <Link to="/message">Message全局提示</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={
                        <span>
                            <Icon type="message" />
                            <span>加载提示</span>
                        </span>}>
                            <Menu.Item key="11">
                                <Link to="/spin">Spin加载中</Link></Menu.Item>
                            <Menu.Item key="12">
                                <Link to="progress">Progress进度条</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
        )
    }
}