import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {fakeAuth} from '../util/fakeAuth';
import {connect} from 'react-redux';
const PrivateRoute = ({component:Component,...rest})=>{
        if(fakeAuth.authenticate() && !rest.isTokenTimeout){
            return (
                <Route
                    {...rest}
                    render = {props => (<Component {...props}/>)}
                ></Route>
            )
        }else{
            return (
                <Redirect to={{
                    pathname:"/login",
                }}/>
            )
        } 
}
function mapStateToProps(state){
    console.log(state);
    return {
        isTokenTimeout:state.isTokenTimeout
    }
}
export default connect(mapStateToProps)(PrivateRoute);