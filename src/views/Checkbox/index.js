import React,{Component} from 'react';
import { Checkbox,Row,Col} from 'antd';
export default class Checkboxs extends Component{
    onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    onChange1(checkedValues) {
        console.log('checked = ', checkedValues);
      }
    render(){
        return (
            <div className="messageWrap">
               <div className="labelTitle">
                    Checkbox多选框
               </div>
               <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">基本用法</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            简单的 checkbox。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <div>
                                <Checkbox defaultChecked={false} disabled />
                                <br />
                                <Checkbox defaultChecked disabled />
                            </div>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">不可用</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                           checkbox 不可用。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange1}>
                                <Row>
                                <Col span={8}>
                                    <Checkbox value="A">A</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="B">B</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="C">C</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="D">D</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="E">E</Checkbox>
                                </Col>
                                </Row>
                            </Checkbox.Group>
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">不可用</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                           checkbox 不可用。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
               </div>
            </div>
        )
    }
}