require('../../css/conductorPageStyle.css');
require('../../css/seatStyle.css');
import React from 'react';
import Title from './title';
import {browserHistory} from 'react-router';

export default class ConductorPage extends React.Component {
    componentWillMount() {
        this.props.getPlayList();
    }
    getSchedule(play_id){
        browserHistory.push(`/schedulePage?id=${play_id}`);

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


        return <div>
            <Title username={this.props.location.query.emp_id}/>
            <div>
                <input  className="search" type="text" placeholder="请输入影片名"/>
                <button className="searchButton glyphicon glyphicon-search"> 查找</button>
                <button className="searchButton">退票</button>
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
        </div>
    }
}