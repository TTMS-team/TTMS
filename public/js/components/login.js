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
            if(nextProps.loginTip[0].emp_position==="1"){
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
        return <div className="pageBody">
            <div  id="title">
                <span>Today  影 院 管 理 系 统</span>
            </div>
            <div className="log">
                <p>一个恰当的时间</p>
                <p>恰当的场合</p>
                <p>一个简单的微笑</p>
                <p>就可以制造奇迹</p>
                </div>
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
