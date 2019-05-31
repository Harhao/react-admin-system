import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import ContentMain from '../../components/ContentMain';
import Logo from '../../assets/images/logo.svg';
import './index.css';
const { Header, Content, Footer, Sider } = Layout;
const {SubMenu } = Menu;
export default class Index extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Layout>
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
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span className="navTitle">
                            <Link to="/">
                                数据统计
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span className="navTitle">
                            <Link to="/basic">
                                 基本组件
                            </Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>输入组件</span>
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
                        <Menu.Item key="9">Alert警告提示</Menu.Item>
                        <Menu.Item key="10">Message全局提示</Menu.Item>
                        <SubMenu key="sub3" title="加载提示">
                            <Menu.Item key="11">Spin加载中</Menu.Item>
                            <Menu.Item key="12">Progress进度条</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <ContentMain/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>admin system ©2019 Created by Harhao</Footer>
            </Layout>
      </Layout>
    );
  }
}
