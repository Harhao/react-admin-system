import React,{Component} from 'react';
import { Layout,Button} from 'antd';
import ContentMain from '../../components/ContentMain';
import SiderNav from '../../components/SiderNav';
import Avatar from '../Avatar'
import './index.css';
import gl_ajax from '../../api/index';
const { Header, Content, Footer} = Layout;
export default class Index extends Component {
    handleClick(){
        gl_ajax({
            method:'get',
            url:'/hello',
            data:{},
            success(res){

            },
            error(err){

            }
        });
    }
  render() {
    return (
        <Layout>
            <SiderNav/>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} >
                    <Avatar/>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <ContentMain/>
                    <Button onClick={this.handleClick.bind(this)}></Button>
                    <Footer style={{ textAlign: 'center'}}>admin system ©2019 Created by Harhao</Footer>
                </Content>              
            </Layout>
        </Layout>
    );
  }
}