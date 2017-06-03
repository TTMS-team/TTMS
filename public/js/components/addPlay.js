import React from 'react';

export default class AddPlay extends React.Component {
    addPlay(){
        var info= {"play_type_id":this.refs.play_type_id.value,
            "play_lang_id":this.refs.play_lang_id.value,
            "play_name":this.refs.play_name.value
            ,"play_introduction":this.refs.play_introduction.value,
            "play_image":this.refs.play_image.value,
            "play_length":this.refs.play_length.value,
            "play_ticket_price":this.refs.play_ticket_price.value,
            "play_status":this.refs.play_status.value};
        console.log(info);
        this.props.addPlay(info);
    }

    render() {

        return <div>
            <label>剧名</label><input type="text" ref="play_name"/>
            <label>语言</label><input type="text" ref="play_lang_id"/>
            <label>类型</label><input type="text" ref="play_type_id"/>

            <label>时长</label><input type="text" ref="play_length"/>
            <label>票价</label><input type="text" ref="play_ticket_price"/>
            <label>介绍</label><input type="text" ref="play_introduction"/>


            <button onClick={this.addPlay().bind(this)}>提交</button>

        </div>
    }
}
