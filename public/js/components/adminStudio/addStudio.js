require ('../../../css/style.css');
require('../../../css/studioStyle.css');
import React from 'react';
import {browserHistory} from 'react-router';
import ReturnBtn from '../returnBtn';

export default class AddStudio extends React.Component {
    
    addStudio(){
        // {"studio_col_count":8,
        // "studio_id":6,
        // "studio_introduction":"1号",
        // "studio_isavailable":"true",
        // "studio_name":"3号厅",
        // "studio_row_count":10}
        var info={
            "studio_name":this.refs.name.value,
            "studio_row_count":this.refs.row.value,
            "studio_col_count":this.refs.col.value,
            "studio_introduction":this.refs.int.value,
            "studio_isavailable":this.refs.ava.value
        };

        this.props.addStudio(info);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addStudioTip) {
            alert("添加成功！");
            browserHistory.push('/adminPage');
        } else {
            alert("添加失败！");
        }
    }
    
    render(){
        return <div id="addStudio">
            <ReturnBtn/>
            <div>
                <div class="form-group"  className="colStyle">
                    <label className="studioLab">演出厅名称</label><input className="studioInput" type="text" ref="name"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab">演出厅行数</label><input  className="studioInput" type="text" ref="row"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab">演出厅列数</label><input className="studioInput" type="text" ref="col"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab" >演出厅是否可用</label><input className="studioInput1" type="text" ref="ava"/>
                </div>
                <div className="colStyle">
                    <label className="studioLab">演出厅介绍</label><input className="studioInput" type="text" ref="int"/>
                </div>

                <button  className="addSubButton" onClick={this.addStudio.bind(this)}>提交</button>
            </div>
        </div>

    }
}