import React from 'react';
import ReturnBtn from '../returnBtn';


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
                   <span className="ticketSpan1">{value.seat_id}</span>
                   <span className="ticketSpan1">{value.sched_id}</span>
                   <span className="ticketSpan1">{value.ticket_price}</span>
                   <span className="ticketSpan1">{value.ticket_status}</span>
                   <span className="ticketSpan1">{value.ticket_locked_time}</span>
                   <input  className="ticketButton" type="button" value="修改"  onClick={this.modifyTicket.bind(this,value.ticket_id)}/>
                   < button className="ticketButton1 glyphicon glyphicon-trash" onClick={this.deleteTicket.bind(this,value.ticket_id)}/>
               </div>
           </div>
        });
      
        return <div className="mainView">
            <div>

                <input className="search" type="text" ref="searchInput" placeholder="请输入员工ID"/>
                <button className="searchButton glyphicon glyphicon-search" onClick={this.searchTicket.bind(this)}> 查询</button>
                <button   className="searchButton glyphicon glyphicon-plus"onClick={this.addTicket.bind(this)}> 添加</button>

            </div>
            <div>
                <span className="ticketSpan">座位ID</span>
                <span className="ticketSpan">演出计划ID</span>
                <span className="ticketSpan">票价</span>
                <span className="ticketSpan">票状态</span>
                <span className="ticketSpan">票锁定时间</span>
            </div>
            {p}
        </div>
    }
}
