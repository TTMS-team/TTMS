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
                    <span>{value.play_id}</span>
                    <span>{value.sched_id}</span>
                    <span>{value.sched_ticket_price}</span>
                    <span>{value.sched_time}</span>
                    <span>{value.studio_id}</span>
                    <input type="button" value="选座" onClick={this.getSeatPage.bind(this,value.studio_id)}/>
                </div>
            </div>
        });

        return <div>
            <Title username={this.props.username}/>
            <h1>演出计划</h1>
            <div>
                <div>
                    <span>剧目ID</span>
                    <span>演出计划ID</span>
                    <span>演出厅票价</span>
                    <span>演出时间</span>
                    <span>演出厅ID</span>
                </div>
                {scheduleList}
            </div>
            
        </div>
    }
}
