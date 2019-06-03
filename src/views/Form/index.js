import React,{Component} from 'react';
import { Input } from 'antd';
import './index.css';
export default class Form extends Component{
    onChange = e => {
        console.log(e);
    };
    render(){
        return (
            <div className="messageWrap">
                <div className="labelTitle">
                    Inut输入框
                </div>
                <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <Input placeholder="Basic usage" />
                        </div>
                            <div className="split">
                                <div className="small"></div>
                                <div className="desc">基本使用</div>
                                <div className="line"></div>
                            </div>
                            <div className="intro">
                                基本使用
                            </div>
                            <div className="usage">使用方法</div>   
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div className="example-input">
                                <Input size="large" placeholder="large size" />
                                <Input placeholder="default size" />
                                <Input size="small" placeholder="small size" />
                            </div>
                        </div>
                            <div className="split">
                                <div className="small"></div>
                                <div className="desc">三种大小</div>
                                <div className="line"></div>
                            </div>
                            <div className="intro">
                                我们为<b>&lt;Input&gt;</b>输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。
                            </div>
                            <div className="usage">使用方法</div>   
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Input placeholder="input with clear icon" allowClear onChange={this.onChange} />
                        </div>
                            <div className="split">
                                <div className="small"></div>
                                <div className="desc">带移除图标</div>
                                <div className="line"></div>
                            </div>
                            <div className="intro">
                                带移除图标的输入框，点击图标删除所有内容。
                            </div>
                            <div className="usage">使用方法</div>   
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Input.Password placeholder="input password" />
                        </div>
                            <div className="split">
                                <div className="small"></div>
                                <div className="desc">密码框</div>
                                <div className="line"></div>
                            </div>
                            <div className="intro">
                                密码框，版本 3.12.0 中新增。
                            </div>
                            <div className="usage">使用方法</div>   
                    </div>
                </div>
            </div>
        )
    }
}