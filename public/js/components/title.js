import React from 'react';

export default class Title extends React.Component {

    render() {
        return <div id="title">
                <span>{this.props.username}</span>
                <span>today影院管理系统</span>
            
        </div>
    }
}
