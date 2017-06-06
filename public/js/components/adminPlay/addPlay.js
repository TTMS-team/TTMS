require ('../../../css/style.css');
import React from 'react';
import {browserHistory} from 'react-router';


export default class AddPlay extends React.Component {
    addPlay(){
        // <span>{value.play_introduction}</span>
        // <span>{value.play_name}</span>
        // <span>{value.play_lang_id}</span>
        // <span>{value.play_type_id}</span>
        // <span>{value.play_length}</span>
        // <span>{value.play_ticket_price}</span>
        // <span>{value.play_status}</span>
        var info= {"play_name":this.refs.name.value,
            "play_lang_id":this.refs.lang.value,
            "play_type_id":this.refs.type.value,
            "play_length":this.refs.length.value,
            "play_ticket_price":this.refs.price.value,
            "play_introduction":this.refs.int.value,
            "play_status":this.refs.status.value
            };
        //if(!info.play_introduction||!info.play_lang_id||!info.play_length||!info.play_name||!info.play_ticket_price||!info.play_type_id||!info.value.play_status)
        //{
        //    alert("添加项均不能为空");
        //    return;
        //}

        this.props.addPlay(info);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addPlayTip) {
            alert("添加成功！");
            browserHistory.push('/adminPage');
        } else {
            alert("添加失败！");
        }
    }


    render() {
        

        return <div className="pageBody" >
           <div>
               <div class="form-group" className="col">
                    <label  className="split">剧目名称</label><input className="playInput" type="text" ref="name"/>
                    <label  className="split">剧目语言</label><input  className="playInput" type="text" ref="lang"/>
                    <label  className="split">剧目类型</label><input  className="playInput" type="text" ref="type"/>
               </div>
               <div className="col">
                   <label  className="split">剧目时长</label><input className="playInput" type="text" ref="length"/>
                   <label  className="split">剧目票价</label><input className="playInput" type="text" ref="price"/>
                   <label  className="split">剧目状态</label><input className="playInput" type="text" ref="status"/>
               </div>
               <div className="col">
                   <label  className="split">剧目介绍</label><input className="playInput1" type="text" ref="int"/>
               </div>
                   <button className="addSubButton" onClick={this.addPlay.bind(this)}>提交</button>

           </div>
        </div>
    }
}
