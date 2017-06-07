import React from 'react';
import {browserHistory} from 'react-router';
import ReturnBtn from '../returnBtn';

export default class AddSchedule extends React.Component {

    addSchedule(){
        
        var info={
            "play_id":this.refs.play_id.value,
            "sched_ticket_price":this.refs.price.value,
            "sched_time":this.refs.time.value,
            "studio_id":this.refs.studio_id.value
        };

        this.props.addSchedule(info);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addScheduleTip.length===6) {
            alert("添加成功！");
            browserHistory.push('/adminPage');
        } else {
            alert("添加失败!请检查输入信息是否正确");
        }
    }

    render(){
        return <div id="addStudio">
            <ReturnBtn/>
            <div>
                <div class="form-group"  className="colStyle">
                    <label className="studioLab">剧目ID</label><input className="studioInput" type="text" ref="play_id"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab">票价</label><input  className="studioInput" type="text" ref="price"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab">演出时间</label><input className="studioInput" type="text" ref="time"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab" >演出厅ID</label><input className="studioInput1" type="text" ref="studio_id"/>
                </div>

                <button  className="addSubButton" onClick={this.addSchedule.bind(this)}>提交</button>
            </div>
        </div>

    }
}