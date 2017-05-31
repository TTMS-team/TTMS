import React from 'react';
import Title from './title';

export default class SchedulePage extends React.Component {
    componentWillMount() {
        //play_id
        this.props.getSchedule(this.props.location.query.id);
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
              <h2>{this.props.location.query.playName}</h2>
            </div>
            
        </div>
    }
}
