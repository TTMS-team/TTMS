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
               <label>剧目名称</label><input type="text" ref="name"/>
               <label>剧目语言</label><input type="text" ref="lang"/>
               <label>剧目类型</label><input type="text" ref="type"/>
               <label>剧目时长</label><input type="text" ref="length"/>
               <label>剧目票价</label><input type="text" ref="price"/>
               <label>剧目状态</label><input type="text" ref="status"/>
               <label>剧目介绍</label><input type="text" ref="int"/>
               <button className="addSubButton" onClick={this.addPlay.bind(this)}>提交</button>

           </div>
        </div>
    }
}
