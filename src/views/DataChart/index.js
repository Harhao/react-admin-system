import React,{Component} from 'react';
import {gl_ajax} from '../../api/index.js';
export default class DataChart extends Component{
    handleClick = ()=>{
        gl_ajax({
            method:'get',
            url:'/todolist',
            data:{},
            success(res){},
            error(err){
                console.log(err);
            }
        });
    }
    render(){
        return (
            <div>
                data Chart
                <button onClick={this.handleClick}>发送请求</button>
            </div>
        )
    }
}