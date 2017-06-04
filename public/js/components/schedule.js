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
                    <span className="table">ID</span>
                    <span className="table">影片名</span>
                    <span className="table">类型</span>
                    <span className="table">时长</span>
                    <span className="table">票价</span>
                    <span className="table">上映日期</span>
                </div>
            </div>
        </div>
    }
}

