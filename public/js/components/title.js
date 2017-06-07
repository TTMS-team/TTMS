import React from 'react';
import {browserHistory} from 'react-router';


export default class Title extends React.Component {
    
    render() {
        return <div >
                <div className="user glyphicon glyphicon-user">
                    <span >{this.props.username}</span>
                </div>
            <div  id="title">
                <span>Today  影 院 管 理 系 统</span>
                </div>
        </div>
    }
}
