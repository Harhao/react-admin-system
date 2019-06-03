import React,{Component} from 'react';
import { Spin,Alert,Switch,Icon} from 'antd';
export default class Spins extends Component{
    state = { loading: false ,loading1:false};

    toggle = value => {
      this.setState({ loading: value });
    };
    toggle1 = value => {
      this.setState({ loading1: value });
    };
    render(){
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        const container = (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          );
        return (
            <div className="messageWrap">
               <div className="labelTitle">
                    Spin加载中
               </div>
               <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <Spin />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">基本</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            一个简单的 loading 状态。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Spin size="small" style={{marginRight:'1rem'}}/>
                            <Spin style={{marginRight:'1rem'}}/>
                            <Spin size="large" />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">各种大小</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Spin tip="Loading...">
                                <Alert
                                message="Alert message title"
                                description="Further details about the context of this alert."
                                type="info"
                                />
                            </Spin>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">自定义描述文案</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            自定义描述文案。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Spin spinning={this.state.loading}>
                                <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                                </Spin>
                                <div style={{ marginTop: 16 }}>
                                Loading state：
                                <Switch checked={this.state.loading} onChange={this.toggle} />
                                </div>
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">卡片加载中</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Spin indicator={antIcon} />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">卡片加载中</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Spin spinning={this.state.loading1} delay={500}>
                                {container}
                                </Spin>
                                <div style={{ marginTop: 16 }}>
                                Loading state：
                                <Switch checked={this.state.loading1} onChange={this.toggle1} />
                                </div>
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">延迟</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
               </div>
            </div>
        )
    }
}