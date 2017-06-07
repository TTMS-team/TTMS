import React from 'react';


export default class Ticket extends React.Component {
    componentWillMount() {
        this.props.getTicketList();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteTicketTip) {
            this.props.getTicketList();
            alert("删除成功！")
        }
    }
    modifyTicket(){

    }
    deleteTicket(ticket_id){
        this.props.deleteTicket(ticket_id);
    }
    searchTicket(){
        var ticket_id=this.refs.searchInput.value;
        if(!ticket_id){
            alert("输入不得为空！");
            return;
        }
        console.log(ticket_id)
        this.props.searchTicket(ticket_id);
    }

    render() {
        var p=this.props.ticketList.map((value,index)=>{
           return<div>
               <div>
                   <span className="ticketSpan1">{value.ticket_id}</span>
                   <span className="ticketSpan1">{value.sched_id}</span>
                   <span className="ticketSpan1">{value.ticket_price}</span>
                   <span className="ticketSpan1">{value.ticket_status}</span>
                   <span className="ticketSpan1">{value.ticket_locked_time}</span>
                   <button onClick={this.deleteTicket.bind(this,value.ticket_id)} className="ticketButton glyphicon glyphicon-trash" onClick={this.deleteTicket.bind(this,value.ticket_id)}/>
               </div>
           </div>
        });
      
        return <div className="mainView">
            <div>

                <input className="search" type="text" ref="searchInput" placeholder="请输入票ID"/>
                <button className="searchButton glyphicon glyphicon-search" onClick={this.searchTicket.bind(this)}> 查询</button>

            </div>
            <div>
                <span className="ticketSpan">票ID</span>
                <span className="ticketSpan">演出计划ID</span>
                <span className="ticketSpan">票价</span>
                <span className="ticketSpan">票状态</span>
                <span className="ticketSpan">票锁定时间</span>
            </div>
            {p}
        </div>
    }
}
