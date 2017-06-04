require ('../../../css/style.css');
import React from 'react';
import {browserHistory} from 'react-router';

export default class AddStudio extends React.Component {
    
    addStudio(){
        var info={
            "studio_name":this.refs.name.value,
            "studio_row":this.refs.row.value,
            "studio_col":this.refs.col.value
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
            <div>
                <div class="form-group"  className="colStyle">
                    <label class="studioLab">演出厅名称</label><input className="studioInput" type="text" ref="name"/>
                </div>
                <div className="colStyle">
                    <label class="studioLab">演出厅行数</label><input  className="studioInput" type="text" ref="row"/>
                </div>
                <div className="colStyle">
                    <label class="studioLab">演出厅列数</label><input className="studioInput" type="text" ref="col"/>
                </div>

                <button  className="addSubButton" onClick={this.addStudio.bind(this)}>提交</button>
            </div>
        </div>

    }
}