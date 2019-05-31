import React,{Component} from 'react';
import {Switch,withRouter} from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import DataChart from '../../views/DataChart';
import Basic from '../../views/Basic';
import Form from '../../views/Form';
import Message from '../../views/Message';
import Alert from '../../views/Alert';
import Spin from '../../views/Spin';
import Progress from '../../views/Progress';

class ContentMain extends Component{
    render(){
        return(
            <div className="routeWrap">
                <Switch>
                    <PrivateRoute path="/dataCount" exact component = {DataChart}/>
                    <PrivateRoute path="/basic" exact component = {Basic}/>
                    <PrivateRoute path="/form" exact component = {Form}/>
                    <PrivateRoute path="/alert" exact component = {Alert}/>
                    <PrivateRoute path="/message" exact component = {Message}/>
                    <PrivateRoute path="/spin" exact component = {Spin}/>
                    <PrivateRoute path="/progress" exact component = {Progress}/>
                </Switch>
            </div>
        )
    }
}
export default withRouter(ContentMain);