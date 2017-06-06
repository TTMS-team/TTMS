require ('../../css/style.css');
require('../../css/adminInterfaceFramework.css');
require('../../css/playStyle.css');

import React from 'react';
import Title from './title';

import Schedule from './adminSchedule/schedule';
import Employee from './adminEmployee/employee';
import Play from './adminPlay/play';
import Studio from './adminStudio/studio';
import Ticket from './adminTicket/ticket';

export default class AdminPage extends React.Component {

    onAside(e){
        this.props.getPresentShow(e.target.className);
    }

    render() {

        var p=<Schedule getScheduleList={this.props.getScheduleList}
                        scheduleList={this.props.scheduleList}/>;
        switch (this.props.presentShow){
            case "schedule":
                p=<Schedule
                    getScheduleList={this.props.getScheduleList}
                    scheduleList={this.props.scheduleList}/>;
                break;
            case "play":
                p=<Play getPlayList={this.props.getPlayList}
                        playList={this.props.playList} 
                        searchPlayById={this.props.searchPlayById} 
                        deletePlay={this.props.deletePlay}
                        deletePlayTip={this.props.deletePlayTip}/>;
                break;
            case "studio":
                p=<Studio getStudioList={this.props.getStudioList}
                          studioList={this.props.studioList}
                          searchStudioById={this.props.searchStudioById} 
                          deleteStudio={this.props.deleteStudio} 
                          deleteStudioTip={this.props.deleteStudioTip}/>;
                break;
            case "ticket":
                p=<Ticket getTicketList={this.props.getTicketList}
                          ticketList={this.props.ticketList}
                          deleteTicket={this.props.deleteTicket}/>;
                break;
            case "employee":
                p=<Employee deleteEmployee={this.props.deleteEmployee}
                            searchEmployeeById={this.props.searchEmployeeById}
                            getEmployeeList={this.props.getEmployeeList} 
                            employeeList={this.props.employeeList}
                            deleteEmployeeTip={this.props.deleteEmployeeTip}/>;
                break;

        }

        return <div className="pageBody">
            <Title username={this.props.location.query.emp_id}/>
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