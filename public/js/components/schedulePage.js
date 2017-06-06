import React from 'react';
import Title from './title';
import {browserHistory} from 'react-router';

export default class SchedulePage extends React.Component {
    componentWillMount() {
    //     //根据play_id获取演出计划
        this.props.getScheduleListByPlayID(this.props.location.query.id);
    }

    getSeatPage(studio_id){
        browserHistory.push(`/seatPage?studio_id=${studio_id}`);

    }
    render() {
        var scheduleList=this.props.scheduleList.map((value,index)=>{
            return <div>
                <div>
                    <span className="schedule_Span">{value.play_id}</span>
                    <span className="schedule_Span">{value.sched_id}</span>
                    <span className="schedule_Span">{value.sched_ticket_price}</span>
                    <span className="schedule_Span">{value.sched_time}</span>
                    <span className="schedule_Span">{value.studio_id}</span>
                    <input className="scheduleButton" type="button" value="选座" onClick={this.getSeatPage.bind(this,value.studio_id)}/>
                </div>
            </div>
        });

        return <div>
            <Title username={this.props.username}/>
            <h2 className="title1"><span className="glyphicon glyphicon-align-justify" aria-hidden="true"></span> 演出计划</h2>
            <div>
                <div>
                    <span className="schedule_Span">剧目ID</span>
                    <span className="schedule_Span">演出计划ID</span>
                    <span className="schedule_Span">演出厅票价</span>
                    <span className="schedule_Span">演出时间</span>
                    <span className="schedule_Span">演出厅ID</span>
                </div>
                {scheduleList}
            </div>
            
        </div>
    }
}
