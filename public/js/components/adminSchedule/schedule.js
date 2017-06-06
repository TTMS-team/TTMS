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
                    <span className="scheduleSpan1">{value.play_id}</span>
                    <span className="scheduleSpan2">{value.sched_id}</span>
                    <span className="scheduleSpan3">{value.sched_ticket_price}</span>
                    <span className="scheduleSpan1">{value.sched_time}</span>
                    <span className="scheduleSpan4">{value.studio_id}</span>
                    <input type="button"  className="scheduleButton" value="修改"  onClick={this.modifySchedule.bind(this,value.sched_id)}/>
                    <button className="scheduleButton1 glyphicon glyphicon-trash" value="删除" onClick={this.deleteSchedule.bind(this,value.sched_id)}/>
                </div>
            </div>
        });

        return <div className="mainView">
            <div>

                <input  className="search" type="text" ref="searchInput" placeholder="请输入员工ID"/>
                <button  className="searchButton glyphicon glyphicon-search" onClick={this.searchSchedule.bind(this)}>  查询</button>
                <button   className="searchButton glyphicon glyphicon-plus"onClick={this.addSchedule.bind(this)}> 添加</button>

            </div>
            <div>
                <span className="scheduleSpan">剧目ID</span>
                <span className="scheduleSpan">演出计划ID</span>
                <span className="scheduleSpan">演出厅票价</span>
                <span className="scheduleSpan">演出时间</span>
                <span className="scheduleSpan">演出厅ID</span>
            </div>
            {p}
        </div>
    }
}
