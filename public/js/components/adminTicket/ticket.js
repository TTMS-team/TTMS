import React from 'react';
import {browserHistory} from 'react-router';


export default class Ticket extends React.Component {
    componentWillMount() {
        this.props.getTicketList();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps. deleteTicketTip) {
            this.props.getTicketList();
            alert("删除成功！")
        }
    }
    modifyTicket(){

    }
    deleteTicket(){

    }
    searchTicket(ticket_id){
        this.props.deleteTicket(ticket_id);
    }
    addTicket(){
        
    }
    render() {
        var p=this.props.ticketList.map((value,index)=>{
           return<div>
               <div>
                   <span>{value.seat_id}</span>
                   <span>{value.sched_id}</span>
                   <span>{value.ticket_price}</span>
                   <span>{value.ticket_status}</span>
                   <span>{value.ticket_locked_time}</span>
                   <input type="button" value="修改"  onClick={this.modifyTicket.bind(this,value.ticket_id)}/>
                   <input type="button" value="删除" onClick={this.deleteTicket.bind(this,value.ticket_id)}/>
               </div>
           </div>
        });
      
        return <div className="mainView">
            <div>

                <input type="text" ref="searchInput" placeholder="请输入员工ID"/>
                <button onClick={this.searchTicket.bind(this)}>查询</button>
                <button onClick={this.addTicket.bind(this)}>添加</button>

            </div>
            <div>
                <span>座位ID</span>
                <span>演出计划ID</span>
                <span>演出计划ID</span>
                <span>票价</span>
                <span>票状态</span>
                <span>票锁定时间</span>
            </div>
            {p}
        </div>
    }
}
