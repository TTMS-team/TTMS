require ('../../css/style.css');
require('../../css/adminInterfaceFramework.css');
require('../../css/playStyle.css');
require('../../css/scheduleStyle.css');
require('../../css/ticketStyle.css');

import React from 'react';
import Title from './title';

import Schedule from './adminSchedule/schedule';
import Employee from './adminEmployee/employee';
import Play from './adminPlay/play';
import Studio from './adminStudio/studio';
import Ticket from './adminTicket/ticket';

export default class AdminPage extends React.Component {

    onAside(e){

        if(e.target.className!="menu2"){
            var child=e.target.parentNode.children;
            for(var i=0;i<child.length;i++){
                child[i].style.backgroundColor="#b9def0";
            }
            e.target.style.backgroundColor=e.target.style.backgroundColor==="#00b3ee"?"#b9def0":"#00b3ee ";
            this.props.getPresentShow(e.target.className);
        }

    }
    turnBack(){
        var presentShow=this.props.presentShow;
        switch (presentShow){
            case "schedule":
                this.props.getScheduleList();
                break;
            case "play":
                this.props.getPlayList();
                break;
            case "studio":
                this.props.getStudioList();
                break;
            case "employee":
                this.props.getEmployeeList();
                break;
            case "ticket":
                this.props.getTicketList();
                break;
        }
    }

    render() {

        var p=<Schedule getScheduleList={this.props.getScheduleList}
                        scheduleList={this.props.scheduleList} 
                        searchScheduleById={this.props.searchScheduleById}
                        deleteSchedule={this.props.deleteSchedule}
                        deleteScheduleTip={this.props.deleteScheduleTip}/>;
        switch (this.props.presentShow){
            case "schedule":
                p=<Schedule
                    getScheduleList={this.props.getScheduleList}
                    scheduleList={this.props.scheduleList} 
                    searchScheduleById={this.props.searchScheduleById} 
                    deleteSchedule={this.props.deleteSchedule} 
                    deleteScheduleTip={this.props.deleteScheduleTip}/>;
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
                          deleteTicket={this.props.deleteTicket}
                          deleteTicketTip={this.props.deleteTicketTip}
                          searchTicket={this.props.searchTicket}/>;
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
            <button className="returnButton glyphicon glyphicon-arrow-left" value="回上页" onClick={this.turnBack.bind(this)}/>
            <div id="menu">
            <ul id="aside" className="menu2" onClick={this.onAside.bind(this)} >
               <li className="schedule" style={{background:"#00b3ee"}} >演出计划</li>
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