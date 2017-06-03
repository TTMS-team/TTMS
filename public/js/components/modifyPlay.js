import React from 'react';

export default class AddPlay extends React.Component {
    componentWillMount() {

        this.props.getOldPlayInfo(this.props.location.query.id);
    }


    addPlay(){
       var a=this.refs.play_type_id.value.trim();
        console.log(a);
        //this.props.addPlay(info);
    }

    render() {

        return <div>
            <label>剧名</label><input type="text" ref="play_name"/>
            <label>语言</label><input type="text" ref="play_lang_id"/>
            <label>类型</label><input type="text" ref="play_type_id"/>

            <label>时长</label><input type="text" ref="play_length"/>
            <label>票价</label><input type="text" ref="play_ticket_price"/>
            <label>介绍</label><input type="text" ref="play_introduction"/>

            <button onClick={this.addPlay.bind(this)}>确认修改</button>

        </div>
    }
}
