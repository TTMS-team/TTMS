require ('../../css/style.css');
require('../../css/adminInterfaceFramework.css');
require('../../css/playStyle.css');

import React from 'react';
import Title from './title';
import Employee from './adminEmployee/employee';
import Play from './play';
import Schedule from './schedule';
import Studio from './adminStudio/studio';
import Ticket from './ticket';

export default class AdminPage extends React.Component {

    onAside(e){
        this.props.getPresentShow(e.target.className);
    }

    render() {

        var p=<Schedule />;
        switch (this.props.presentShow){
            case "schedule":
                p=<Schedule/>;
                break;
            case "play":
                p=<Play/>;
                break;
            case "studio":
                p=<Studio getStudioList={this.props.getStudioList} studioList={this.props.studioList} searchStudioById={this.props.searchStudioById} deleteStudio={this.props.deleteStudio} deleteStudioTip={this.props.deleteStudioTip}/>;
                break;
            case "ticket":
                p=<Ticket/>;
                break;
            case "employee":
                p=<Employee deleteEmployee={this.props.deleteEmployee} searchEmployeeById={this.props.searchEmployeeById} getEmployeeList={this.props.getEmployeeList} employeeList={this.props.employeeList} deleteEmployeeTip={this.props.deleteEmployeeTip}/>;
                break;

        }

        return <div className="pageBody">
            <Title username={this.props.username}/>
            <div id="menu">
            <ul id="aside" onClick={this.onAside.bind(this)} >
               <li className="schedule" >演出计划</li>
               <li className="play">剧目管理</li>
               <li className="studio">演出厅管理</li>
               <li className="ticket">票务管理</li>
               <li className="employee">员工管理</li>
            </ul>
                </div>
            <div>
                {p}
            </div>
        </div>
    }
}