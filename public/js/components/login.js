require ('../../css/loginStyle.css');

import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:""
        }
    }
    onLogin(){
        const username=this.refs.userName.value;
        const password=this.refs.passWord.value;
        var info={
            "username":username,
            "password":password
        }
        if(!username||!password)
        {
            alert("用户名密码不能为空！");
            return;
        }

        this.props.onLogin(info);

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.loginTip[0])
        if (nextProps.loginTip[0]) {
            if(nextProps.loginTip[0].emp_position==="经理"){
                browserHistory.push(`/adminPage?emp_id=${nextProps.loginTip[0].emp_id}`);
            }else{
                browserHistory.push(`/conductorPage?emp_id=${nextProps.loginTip[0].emp_id}`);
            }
        } else{
            alert("登录失败！");
        }
    }
    changeName(){
        this.setState({
            name:this.refs.userName.value
        })
    }
    changePassword(){
        this.setState({
            password:this.refs.passWord.value
        })
    }

    render() {
        var name=this.state.name;
        var password=this.state.password;
        return <div>

            <div id="login">
                <div>
                    <span className="loginTitle">账号登录</span>
                </div>
                <input type="text" onChange={this.changeName.bind(this)} className="username" ref="userName" placeholder="工号" value={name}/>
                <input type="password"onChange={this.changePassword.bind(this)} className="pass"  ref ="passWord" placeholder="密码" value={password}/>
                <button onClick={this.onLogin.bind(this)} className="submit">登录</button>
            </div>
            </div>
    }
}
