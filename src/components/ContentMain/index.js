import React,{Component} from 'react';
import {Switch,withRouter} from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import DataChart from '../../views/DataChart';
import Basic from '../../views/Basic';

class ContentMain extends Component{
    render(){
        return(
            <div className="routeWrap">
                <Switch>
                    <PrivateRoute path="/dataCount" exact component = {DataChart}/>
                    <PrivateRoute path="/basic" exact component = {Basic}/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(ContentMain);