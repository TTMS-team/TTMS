require ('../../css/style.css');
import React from 'react';
import {browserHistory} from 'react-router';



export default class Employee extends React.Component {




    render() {
       
        return <div className="mainView">
            <div>
                <input type="text" className="search" />
                <button className="searchButton">查询</button>
            </div>
            <div>
                <div>
                    <span>ID</span>
                    <span>影片名</span>
                    <span>类型</span>
                    <span>时长</span>
                    <span>票价</span>
                    <span>上映日期</span>
                </div>
            </div>
        </div>
    }
}

