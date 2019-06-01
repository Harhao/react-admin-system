import React,{Component} from 'react';
import Charts from '../../components/Chart';
import Diagram from '../../components/Diagram';
import Line from '../../components/Line';
import Map from '../../components/Map';
import AreaMap from '../../components/AreaMap';
import './index.css';
export default class DataChart extends Component{
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
            </div>
        )
    }
}