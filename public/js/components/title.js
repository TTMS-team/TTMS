import React from 'react';
import {browserHistory} from 'react-router';


export default class Title extends React.Component {
    
    render() {
        return <div id="title">
                <span>{this.props.username}</span>
                <span>Today  影 院 管 理 系 统</span>
        </div>
    }
}
