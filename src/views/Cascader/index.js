import React,{Component} from 'react';
import { Cascader   } from 'antd';
import './index.css';
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
export default class Cascaders extends Component{
    onChange = (value) => {
        console.log(value);
    }
    render(){
        return (
            <div className="messageWrap">
               <div className="labelTitle">
                    Cascader级联选择
               </div>
               <div className="displayCode clearfix">
                    <div className="codeSection">
                        <div className="example">
                            <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">基本</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            省市区级联。。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
                    <div className="codeSection">
                        <div className="example">
                            <Cascader
                                defaultValue={['zhejiang', 'hangzhou', 'xihu']}
                                options={options}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="split">
                            <div className="small"></div>
                            <div className="desc">基本</div>
                            <div className="line"></div>
                        </div>
                        <div className="intro">
                            省市区级联。。
                        </div>
                        <div className="usage">使用方法</div>
                    </div>
               </div>
            </div>
        )
    }
}