import React from 'react';
import {browserHistory} from 'react-router';


export default class ReturnBtn extends React.Component {
    backPage(){
        browserHistory.push('/adminPage');
    }

    render() {
        return <div>
            <button onClick={this.backPage.bind(this)}>返回</button>
        </div>
    }
}
