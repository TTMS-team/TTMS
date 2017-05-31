import React from 'react';
import {browserHistory} from 'react-router';


export default class Hello extends React.Component {
    onLogin(){
        this.props.onLogin();

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

                <input type="text" />
                <input type="password"/>
                <button onClick={this.onLogin.bind(this)}>登录</button>
        </div>
    }
}
