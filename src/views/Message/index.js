import React,{Component} from 'react';
import { message, Button } from 'antd';
import './index.css';
export default class Message extends Component{
    info = (type,time =3) => {
        switch(type){
            case 'success':
                message.success('这是一个成功的提示',time);break;
            case 'error':
                message.error('这是一个错误的提示',time);break;
            case 'warning':
                message.warning('这是一个警告提示',time);break;
            default:
                message.info('这是一个普通的提示',time);
        }
    }
    loading = ()=>{
        const hide = message.loading('loading ...', 0);
        setTimeout(hide, 2500);
    }
    render(){
        return (
            <div className="messageWrap">
               <div className="labelTitle">
                    Message全局提示
               </div>
               <div className="displayCode">
                    <div className="codeSection">
                        <div className="example">
                            <Button onClick={(e) =>this.info('')} className="btn" type="primary">info</Button>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">普通提示</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            信息提示反馈。
                        </div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Button onClick={(e) =>this.info('success')} className="btn">Success</Button>
                            <Button onClick={(e) =>this.info('error')} className="btn">Error</Button>
                            <Button onClick={this.info.bind(this,'warning')} className="btn">Warning</Button>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">其他提示类型</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            包括成功、失败、警告。
                        </div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Button onClick={(e) =>this.info('success',10)} className="btn">Success</Button>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">修改延时</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                           自定义时长为10s,默认时长为10s。
                        </div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Button onClick={this.loading} className="btn">loading</Button>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">加载中</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            进行全局 loading，异步自行移除。
                        </div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Button onClick={this.loading} className="btn">loading</Button>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">Promise接口</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            进行全局 loading，异步自行移除。
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}