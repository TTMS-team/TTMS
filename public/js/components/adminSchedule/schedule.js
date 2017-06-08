import React from 'react';
import {browserHistory} from 'react-router';
import ReturnBtn from '../returnBtn';


export default class Schedule extends React.Component {
    componentWillMount() {
        this.props.getScheduleList();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteScheduleTip) {
            this.props.getScheduleList();
            alert("删除成功！")
        }
    }
    modifySchedule(){

    }
    deleteSchedule(sched_id){
        this.props.deleteSchedule(sched_id);
    }
    searchSchedule(){
            var schedule_id=this.refs.searchInput.value;
            if(!schedule_id){
                alert("输入不得为空！");
                return;
            }
            this.props.searchScheduleById(schedule_id);
        
    }
    addSchedule(){
        browserHistory.push('/addSchedule');
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
                    <button className="scheduleButton glyphicon glyphicon-trash" value="删除" onClick={this.deleteSchedule.bind(this,value.sched_id)}/>
                </div>
            </div>
        });

        return <div className="mainView">
            <div>

                <input  className="search" type="text" ref="searchInput" placeholder="请输入演出计划ID"/>
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
