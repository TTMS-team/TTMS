import React from 'react';
import {browserHistory} from 'react-router';
import ReturnBtn from '../returnBtn';


export default class ModifyStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            row: null,
            col: null,
            ava:null,
            int:null



        }
    }

    componentWillMount() {
        this.props.getOldStudioInfo(this.props.location.query.id);//ok
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.updateStudioTip) {
            alert("修改成功！");
            browserHistory.push('/adminPage');
        }
    }

    upDateStudioModify(){
        this.props.updateStudioModify({
            id:this.props.location.query.id,

            name:this.refs.studio_name.value,
            row:this.refs.studio_row.value,
            col:this.refs.studio_col.value,
            ava: this.refs.ava.value,
            int: this.refs.int.value


        });
    }

    onchangeName(){
        this.setState({
            name: this.refs.studio_name.value
        });
    }

    onchangeRow(){
        this.setState({
            row: this.refs.studio_row.value
        });
    }
    onchangeCol(){
        this.setState({
            col: this.refs.studio_col.value
        });
    }
    onchangeAva(){
        this.setState({
            ava: this.refs.ava.value
        });
    }
    onchangeInt(){
        this.setState({
            int: this.refs.int.value
        });
    }

    render() {
        var oldInfo=this.props.oldStudioInfo[0];
        var name=this.state.name ===null ? oldInfo.studio_name:this.state.name;
    var row=this.state.row ===null ? oldInfo.studio_row_count:this.state.row;
    var col=this.state.col ===null ? oldInfo.studio_col_count:this.state.col;
    var int=this.state.int ===null ? oldInfo.studio_introduction:this.state.int;
    var ava=this.state.ava ===null ? oldInfo.studio_isavailable:this.state.ava;


        return <div div id="addStudio">
            <ReturnBtn/>
            <div>
                <div class="form-group"  className="colStyle">
                    <label className="studioLab1">演出厅名称</label><input className="studioInput2" type="text" value={name} ref="studio_name" onChange={this.onchangeName.bind(this)}/>
                </div>
                <div className="colStyle">
                    <label className="studioLab1">座位行数</label><input disabled="disabled" className="studioInput2"  type="text" value={row} ref="studio_row" onChange={this.onchangeRow.bind(this)}/>
                </div>
                <div className="colStyle">
                    <label  className="studioLab1">座位列数</label><input disabled="disabled" className="studioInput2"  type="text" value={col} ref="studio_col" onChange={this.onchangeCol.bind(this)}/>
                </div>
                <div className="colStyle">
                    <label   className="studioLab1">演出厅是否可用</label><input className="studioInput2" type="text" ref="ava" value={ava} onChange={this.onchangeAva.bind(this)}/>
                </div>
                <div className="colStyle">
                    <label  className="studioLab1">演出厅介绍</label><input  className="studioInput2" type="text" ref="int" value={int} onChange={this.onchangeInt.bind(this)}/>
                </div>

                <button  className="addSubButton" onClick={this.upDateStudioModify.bind(this)}>确认修改</button>

            </div>
        </div>
    }
}