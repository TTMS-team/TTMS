require ('../../css/loginStyle.css');

import React from 'react';
import {browserHistory} from 'react-router';

export default class Login extends React.Component {
    onLogin(){
        const userName=this.refs.userName.value;
        const passWord=this.refs.passWord.value;
        if(!userName||!passWord)
        {
            alert("用户名密码不能为空！")
            return;
        }
        this.props.onLogin(userName,passWord);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginTip === "true") {
            browserHistory.push('/conductorPage');
        } else if(nextProps.loginTip === "false") {
            alert("登录失败！");
        }
    }
    
    render() {
        return <div>

            <div id="login">
                <div>
                    <span className="loginTitle">账号登录</span>
                </div>
                <input type="text" className="username" ref="userName" placeholder="用户名"/>
                <input type="password" className="pass"  ref ="passWord" placeholder="密码"/>
                <button onClick={this.onLogin.bind(this)} className="submit">登录</button>
            </div>
            </div>
    }
}
