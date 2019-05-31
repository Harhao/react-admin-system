import React,{Component} from 'react';
import {Switch,withRouter} from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import DataChart from '../../views/DataChart';
import Basic from '../../views/Basic';

class ContentMain extends Component{
    render(){
        return(
            <Switch>
                <PrivateRoute path="/" exact component = {DataChart}/>
                <PrivateRoute path="/basic" exact component = {Basic}/>
            </Switch>
        )
    }
}
export default withRouter(ContentMain);