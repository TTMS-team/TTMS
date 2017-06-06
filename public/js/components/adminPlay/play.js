import React from 'react';
import {browserHistory} from 'react-router';


export default class Play extends React.Component {
    componentWillMount() {
        this.props.getPlayList();
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.deletePlayTip);
        if (nextProps.deletePlayTip) {
            this.props.getPlayList();
            alert("删除成功！")
        }
    }
    
    modifyPlay(play_id){
        browserHistory.push(`/modifyPlay?id=${play_id}`);
    }
    deletePlay(play_id){
        this.props.deletePlay(play_id);
    }
    searchPlay(){
        var play_id=this.refs.searchInput.value;
        if(!play_id){
            alert("输入不得为空！");
            return;
        }
        this.props.searchPlayById(play_id);
    }
    addPlay(){
        browserHistory.push('/addPlay');
    }
    render() {
        // console.log(this.props.playList)
        var p=this.props.playList.map((value,index)=>{
            return <div>
                <div>
                    <span className="playSpan1">{value.play_id}</span>
                    <span className="playSpan1">{value.play_name}</span>
                    <span className="playSpan1">{value.play_lang_id}</span>
                    <span className="playSpan1">{value.play_type_id}</span>
                    <span className="playSpan1">{value.play_length}</span>
                    <span className="playSpan1">{value.play_ticket_price}</span>
                    <span className="playSpan1">{value.play_status}</span>
                    <input className="playButton" type="button" value="修改"  onClick={this.modifyPlay.bind(this,value.play_id)}/>
                    <button className="playButton1 glyphicon glyphicon-trash" onClick={this.deletePlay.bind(this,value.play_id)}/>
                </div>
            </div>
        });

        return <div className="mainView">
            <div>
                <input className="search" type="text" ref="searchInput" placeholder="请输入剧目ID"/>
                <button className="searchButton glyphicon glyphicon-search" onClick={this.searchPlay.bind(this)}> 查询</button>
                <button className="searchButton glyphicon glyphicon-plus" onClick={this.addPlay.bind(this)}> 添加</button>
            </div>
            <div>
                <div>
                <span className="playSpan">剧目ID</span>
                <span className="playSpan">剧目名称</span>
                <span className="playSpan">剧目语言</span>
                <span className="playSpan">剧目类型</span>
                <span className="playSpan">剧目时长</span>
                <span className="playSpan">剧目票价</span>
                <span className="playSpan">剧目状态</span>
            </div>
                {p}
            </div>
        </div>
    }
}
