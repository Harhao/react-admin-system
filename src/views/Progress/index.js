import React,{Component} from 'react';
import { Progress,Button} from 'antd';
const ButtonGroup = Button.Group;
export default class Progreses extends Component{
    state = {
        percent: 0,
    };
    
    increase = () => {
        let percent = this.state.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.setState({ percent });
    };
    
    decline = () => {
        let percent = this.state.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.setState({ percent });
    };
    render(){
        return (
            <div className="messageWrap">
                <div className="labelTitle">
                    Progress进度条
                </div>
                <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Progress percent={30} />
                                <Progress percent={50} status="active" />
                                <Progress percent={70} status="exception" />
                                <Progress percent={100} />
                                <Progress percent={50} showInfo={false} />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">进度条</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            普通进度条。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Progress type="circle" percent={75} />
                                <Progress type="circle" percent={70} status="exception" />
                                <Progress type="circle" percent={100} />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">进度圈</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            圈型进度。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div style={{ width: 170 }}>
                                <Progress percent={30} size="small" />
                                <Progress percent={50} size="small" status="active" />
                                <Progress percent={70} size="small" status="exception" />
                                <Progress percent={100} size="small" />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">小型进度</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            适合放在较狭窄的区域内。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Progress type="circle" percent={30} width={80} />
                                <Progress type="circle" percent={70} width={80} status="exception" />
                                <Progress type="circle" percent={100} width={80} />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">小型进度圈</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            小一号进度圈。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Progress type="circle" percent={this.state.percent} />
                                <ButtonGroup>
                                    <Button onClick={this.decline} icon="minus" />
                                    <Button onClick={this.increase} icon="plus" />
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">进度圈型动态展示</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            会动的进度条才是好进度条。。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Progress percent={this.state.percent} />
                                <ButtonGroup>
                                <Button onClick={this.decline} icon="minus" />
                                <Button onClick={this.increase} icon="plus" />
                                </ButtonGroup>
                            </div>  
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">进度圈型动态展示</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            会动的进度条才是好进度条。。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                </div>
         </div>
        )
    }
}