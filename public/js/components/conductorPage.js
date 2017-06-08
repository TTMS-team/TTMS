require('../../css/conductorPageStyle.css');
require('../../css/seatStyle.css');

import React from 'react';
import Title from './title';
import {browserHistory} from 'react-router';

export default class ConductorPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            returnTicketClassName:"returnTicket",
            shade:"shade"
        }
    }
    componentWillMount() {
        this.props.getPlayList();
    }
    getSchedule(play_id){
        browserHistory.push(`/schedulePage?id=${play_id}`);

    }
    onReturnTicket(){
        this.setState({
            returnTicketClassName:"returnTicket1",
            shade:"shade1"
        })
    }
    confirmReturn(){
        var input=this.refs.returnInput.value;
        this.props.confirmReturn(input);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.returnTip){
            this.setState({
                returnTicketClassName:"returnTicket",
                shade:"shade"

            })
            alert("退票成功！");
            this.props.getPlayList();
        }
    }

    render() {

        //film:[{filmName:,duration,type,director,language}...]


        var playList=this.props.playList.map((value,key)=>{
            return <div >
                    <div >
                        <span className="conductorSpan1">{value.play_name}</span>
                        <span className="conductorSpan1">{value.play_type_id}</span>
                        <span className="conductorSpan1">{value.play_length}</span>
                        <span className="conductorSpan1">{value.play_lang_id}</span>
                        <span className="conductorSpan1">{value.play_ticket_price}</span>
                        <button className=" conductorButton glyphicon glyphicon-th-list"  onClick={this.getSchedule.bind(this,value.play_id)}> 演出计划</button>

                    </div>
            </div>
        });


        return <div className="pageBody1">
            <Title username={this.props.location.query.emp_id}/>
            <div>
                <input  className="search" type="text" placeholder="请输入影片名"/>
                <button className="searchButton glyphicon glyphicon-search"> 查找</button>
                <button className="searchButton" onClick={this.onReturnTicket.bind(this)}>退票</button>
            </div>
            <div className="mainView1">
                <div>
                    <span className="conductorSpan">剧目名称</span>
                    <span className="conductorSpan">剧目类型</span>
                    <span className="conductorSpan">剧目时长</span>
                    <span className="conductorSpan">剧目语言</span>
                    <span className="conductorSpan">剧目票价</span>
                </div>
                {playList}
            </div>
            <div className={this.state.returnTicketClassName}>
                    <input type="text" ref="returnInput" placeholder="请输入票ID" className="inputId"/><br/>
                    <input type="button" value="确认退票" onClick={this.confirmReturn.bind(this)} className="returnBtn"/>


            </div>
            <div className={this.state.shade}>
            </div>
                </div>
    }
}