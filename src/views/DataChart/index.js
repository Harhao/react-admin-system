import React,{Component} from 'react';
import Charts from '../../components/Chart';
import Diagram from '../../components/Diagram';
import Line from '../../components/Line';
import Map from '../../components/Map';
import AreaMap from '../../components/AreaMap';
import './index.css';
import gl_ajax from '../../api/index';
import {Button} from 'antd';
export default class DataChart extends Component{
    handleClick (){
        gl_ajax({
            method:'get',
            url:'/api/v1/hello',
            data:{},
            success(res){},
            error(err){}
        })
    }
    render(){
        return (
            <div className="chartWrap clearfix">
                <div className="row clearfix">
                    <div className="chart">
                        <Charts/>
                    </div>
                    <div className="chart">
                        <Diagram/>
                    </div>
                    <div className="chart">
                        <Map/>
                    </div>
                    <div className="chart">
                        <Line/>
                    </div>
                    <div className="chart">
                        <AreaMap/>
                    </div>
                </div>
                <Button onClick={this.handleClick.bind(this)}>click</Button>
            </div>
        )
    }
}