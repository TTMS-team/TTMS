import React from 'react';
import {browserHistory} from 'react-router';


export default class ReturnBtn extends React.Component {
    backPage(){
        browserHistory.push('/adminPage');
    }

    render() {
        return <div>
            <button  className="returnButton glyphicon glyphicon-arrow-left" onClick={this.backPage.bind(this)}></button>
        </div>
    }
}
