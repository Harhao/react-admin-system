import React,{ Component } from "react";
import notFound from '../../assets/images/404.svg';
import './index.css';
export default class NoMatch extends Component{
    componentDidMount(){
        console.log("***",this.props);
    }
    render(){
        return (
            <div className="notFound">
                <img src={notFound} className="notFoundIcon" alt="not found"/>
                <p className="tips">
                    我们也迷路了，找不到这个页面
                </p>
            </div>
        )
    }
}