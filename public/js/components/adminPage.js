import React from 'react';
import Title from './title';
import Employee from './employee';
import Play from './play';
import Schedule from './schedule';
import Studio from './studio';
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
                p=<Studio/>;
                break;
            case "ticket":
                p=<Ticket/>;
                break;
            case "employee":
                p=<Employee getEmployeeList={this.props.getEmployeeList} employeeList={this.props.employeeList} deleteTip={this.props.deleteTip}/>;
                break;
        }

        return <div>
            <Title username={this.props.username}/>
            <ul id="aside" onClick={this.onAside.bind(this)}>
               <li className="schedule">演出计划</li>
               <li className="play">剧目管理</li>
               <li className="studio">演出厅管理</li>
               <li className="ticket">票务管理</li>
               <li className="employee">员工管理</li>
            </ul>
            <div>
                {p}
            </div>
        </div>
    }
}