import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {fakeAuth} from '../../util/fakeAuth';
import LoginForm from './index';
export default class Login extends Component{
    render(){
        return (
            fakeAuth.authenticate()?<Redirect to="/"></Redirect>:<LoginForm />
        )
    }
}