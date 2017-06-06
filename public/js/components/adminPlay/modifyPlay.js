import React from 'react';
import ReturnBtn from '../returnBtn';

import {browserHistory} from 'react-router';


export default class ModifyStudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            lang: null,
            type: null,
            length:null,
            int:null,
            price:null,
            status:null



        }
    }

    componentWillMount() {
        this.props.getOldPlayInfo(this.props.location.query.id);//ok
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.updatePlayTip) {
            alert("修改成功！");
            browserHistory.push('/adminPage');
        }
    }

    updatePlayModify(){
        this.props.updatePlayModify({
            id:this.props.location.query.id,    

            name: this.refs.name.value,
            lang: this.refs.lang.value,
            type: this.refs.type.value,
            length:this.refs.length.value,
            int:this.refs.int.value,
            price:this.refs.price.value,
            status: this.refs.status.value


        });
    }

    onchangeName(){
        this.setState({
            name: this.refs.name.value
        });
    }

    onchangeLang(){
        this.setState({
            lang: this.refs.lang.value
        });
    }
    onchangeType(){
        this.setState({
            type: this.refs.type.value
        });
    }
    onchangeLength(){
        this.setState({
            length: this.refs.length.value
        });
    }
    onchangeInt(){
        this.setState({
            int: this.refs.int.value
        });
    }
    onchangePrice(){
        this.setState({
            price: this.refs.price.value
        });
    }
    onchangeStatus(){
        this.setState({
            status: this.refs.status.value
        });
    }
    render() {
       
        console.log(oldInfo);
        var oldInfo=this.props.oldPlayInfo[0];
        const name=this.state.name ===null ? oldInfo.play_name:this.state.name;
        const lang=this.state.lang ===null ? oldInfo.play_lang_id:this.state.lang;
        const type=this.state.type ===null ? oldInfo.play_type_id:this.state.type;
        const length=this.state.length ===null ? oldInfo.play_length:this.state.length;
        const price=this.state.price ===null ? oldInfo.play_ticket_price:this.state.price;
        const int=this.state.int ===null ? oldInfo.play_introduction:this.state.int;
        const status=this.state.status ===null ? oldInfo.play_status:this.state.status;




        return <div className="pageBody" >
            <ReturnBtn/>
            <div class="form-group" className="col">
                <label  className="split">剧目名称</label><input className="playInput" type="text" value={name} ref="name" onChange={this.onchangeName.bind(this)}/>
                <label  className="split">剧目语言</label><input className="playInput" type="text" value={lang} ref="lang" onChange={this.onchangeLang.bind(this)}/>
                <label  className="split">剧目类型</label><input className="playInput" type="text" value={type} ref="type" onChange={this.onchangeType.bind(this)}/>
            </div>
            <div className="col">
                <label  className="split">剧目时长</label><input  className="playInput"type="text" ref="length" value={length} onChange={this.onchangeLength.bind(this)}/>
                <label  className="split">剧目票价</label><input  className="playInput" type="text" ref="price" value={price} onChange={this.onchangePrice.bind(this)}/>
                <label  className="split">剧目状态</label><input  className="playInput" type="text" ref="status" value={status} onChange={this.onchangeStatus.bind(this)}/>
            </div>
            <div className="col">
                <label  className="split">剧目介绍</label><input className="playInput1" type="text" ref="int" value={int} onChange={this.onchangeInt.bind(this)}/>
            </div>.

            <button className="addSubButton" onClick={this.updatePlayModify.bind(this)}>确认修改</button>
        </div>
    }
}

