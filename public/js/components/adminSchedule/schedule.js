import React from 'react';
import {browserHistory} from 'react-router';


export default class Schedule extends React.Component {
    componentWillMount() {
        this.props.getScheduleList();
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps. deleteTicketTip) {
        //     this.props.getTicketList();
        //     alert("删除成功！")
        // }
    }
    modifySchedule(){

    }
    deleteSchedule(){

    }
    searchSchedule(ticket_id){
        this.props.deleteTicket(ticket_id);
    }
    addSchedule(){

    }
    render() {
        
        var p=this.props.scheduleList.map((value,index)=>{
            return<div>
                <div>
                    <span>{value.play_id}</span>
                    <span>{value.sched_id}</span>
                    <span>{value.sched_ticket_price}</span>
                    <span>{value.sched_time}</span>
                    <span>{value.studio_id}</span>
                    <input type="button" value="修改"  onClick={this.modifySchedule.bind(this,value.sched_id)}/>
                    <input type="button" value="删除" onClick={this.deleteSchedule.bind(this,value.sched_id)}/>
                </div>
            </div>
        });

        return <div className="mainView">
            <div>

                <input type="text" ref="searchInput" placeholder="请输入员工ID"/>
                <button onClick={this.searchSchedule.bind(this)}>查询</button>
                <button onClick={this.addSchedule.bind(this)}>添加</button>

            </div>
            <div>
                <span>剧目ID</span>
                <span>演出计划ID</span>
                <span>演出厅票价</span>
                <span>演出时间</span>
                <span>演出厅ID</span>
            </div>
            {p}
        </div>
    }
}
