import React from 'react';
import {browserHistory} from 'react-router';


export default class ModifyStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            row: null,
            col: null
           


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
        this.props.upDateStudioModify({
            id:this.props.location.query.id,

            name:this.refs.studio_name.value,
            row:this.refs.studio_row.value,
            col:this.refs.studio_col.value
           
        });
    }

    onchangeName(){
        this.setState({
            name: this.refs.studio_name.value
        });
    }

    onchangeRow(){
        this.setState({
            sex: this.refs.studio_row.value
        });
    }
    onchangeCol(){
        this.setState({
            age: this.refs.studio_col.value
        });
    }
   
     
    render() {

        var oldInfo=this.props.oldStudioInfo[0];

        const name=this.state.name ===null ? oldInfo.studio_name:this.state.name;
        const row=this.state.sex ===null ? oldInfo.studio_sex:this.state.row;
        const col=this.state.age ===null ? oldInfo.studio_age:this.state.col;
        
        return <div>
            <label>演出厅名称</label><input type="text" value={name} ref="studio_name" onChange={this.onchangeName.bind(this)}/>
            <label>座位行数</label><input type="text" value={row} ref="studio_row" onChange={this.onchangeRow.bind(this)}/>
            <label>座位列数</label><input type="text" value={col} ref="studio_col" onChange={this.onchangeCol.bind(this)}/>



            <button onClick={this.upDateStudioModify.bind(this)}>确认修改</button>
        </div>
    }
}

