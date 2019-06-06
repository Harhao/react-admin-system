import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {fakeAuth} from '../util/fakeAuth';
import {connect} from 'react-redux';
const PrivateRoute = ({component:Component,...rest})=>{
        return (
            <Route
                {...rest}
                render = {props => (fakeAuth.authenticate())?(<Component {...props}/>):(
                    <Redirect to={{
                        pathname:"/login",
                        state:{from:props.location}
                    }}/>
                )}
            ></Route>
        )
    
}
function mapStateToProps(state){
    console.log(state);
    return {
        isTokenTimeout:state.isTokenTimeout
    }
}
export default connect(mapStateToProps)(PrivateRoute);