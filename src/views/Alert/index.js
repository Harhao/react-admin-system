import React,{Component} from 'react';
import { Alert } from 'antd';
export default class Alerts extends Component{
    render(){
        return (
            <div className="messageWrap">
               <div className="labelTitle">
                    Alert警告提示
               </div>
               <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <Alert message="Success Text" type="success" />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">基本</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                         最简单的用法，适用于简短的警告提示。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Alert message="Success Text" type="success" />
                            <Alert message="Info Text" type="info" />
                            <Alert message="Warning Text" type="warning" />
                            <Alert message="Error Text" type="error" />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">四种样式</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            共有四种样式 success、info、warning、error。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Alert message="Success Tips" type="success" showIcon />
                                <Alert message="Informational Notes" type="info" showIcon />
                                <Alert message="Warning" type="warning" showIcon />
                                <Alert message="Error" type="error" showIcon />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">图标</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            可口的图标让信息类型更加醒目。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Alert message="Info Text" type="info" closeText="Close Now" />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">自定义关闭</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            可以自定义关闭，自定义的文字会替换原先的关闭 Icon。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
               </div>
            </div>
        )
    }
}