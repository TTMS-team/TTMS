import React from 'react';
import Title from './title';
import {browserHistory} from 'react-router';

export default class SchedulePage extends React.Component {
    // componentWillMount() {
    //     //根据play_id获取演出计划
    //     this.props.getSchedule(this.props.location.query.id);
    // }

    getSeatPage(row,col){
        browserHistory.push(`/seatPage?row=${row}&col=${col}`);

    }
    render() {
        var scheduleList=this.props.schedule.map((value,index)=>{
            return <div>
                <Link to={`/seatPage?id=${value.studio_id}`}>
                        <div>
                            <span>{value.studio_id}</span>
                            <span>{value.studio_id}</span>
                            <span>{value.studio_id}</span>
                        </div>
                </Link>
            </div>
        });

        return <div>
            <Title username={this.props.username}/>
            <div>
                演出计划页面
              <h2>{this.props.location.query.id}</h2>
                <input type="button" value="选座" onClick={this.getSeatPage.bind(this,5,6)}/>
            </div>
            
        </div>
    }
}
