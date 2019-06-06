import React,{Component} from 'react';
import {Switch,withRouter,Route} from 'react-router-dom';
import PrivateRoute from '../../router/PrivateRoute';
import {routes} from '../../router/route';
import NoMatch from '../../views/NoMatch';
import './index.css';
class ContentMain extends Component{
    render(){
        return(
            <div className="routeWrap">
                <Switch>
                    {
                        routes.map(item=>{
                            return (
                                item.path?<PrivateRoute path={item.path} exact component={item.component}/>:<Route component={NoMatch}/>
                            )
                        })
                    }
                    
                </Switch>
            </div>
        )
    }
}
export default withRouter(ContentMain);