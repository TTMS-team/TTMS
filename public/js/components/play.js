import React from 'react';
import {browserHistory} from 'react-router';


export default class Play extends React.Component {

    //componentWillMount() {
    //    this.props.getPlayList();
    //}
    //addPlay() {
    //    browserHistory.push('/addPlay');
    //}
    //
    //deletePlay(play_id){
    //
    //}
    //
    //modifyPlay(play_id){
    //    browserHistory.push('/modifyPlay')
    //}
    //
    //searchPlay(){
    //
    //}
    render() {
        //var p=this.props.playList.map((value,index)=>{
        //    return <div>
        //        <span>{value.play_id}</span>
        //        <span>{value.play_name}</span>
        //        <span>{value.play_lang_id}</span>
        //        <span>{value.play_type_id}</span>
        //        <span>{value.play_length}</span>
        //        <span>{value.play_ticket_price}</span>
        //        <span>{value.play_status}</span>
        //        <Link to={`/modifyPlay?id=${value.play_id}`}><input type="button" value="修改"  onClick={this.modifyPlay.bind(this,value.play_id)}/></Link>
        //        <input type="button" value="删除" onClick={this.deletePlay.bind(this,value.play_id)}/>
        //    </div>
        //});

        return <div className="mainView">
            //<div>
            //    <input type="text"/>
            //    <button onClick={this.searchPlay.bind(this)}>查询</button>
            //    <button onClick={this.addPlay.bind(this)}>添加</button>
            //</div>
            <div>
                <div>
                <span>剧目编号</span>
                <span>剧目名称</span>
                <span>剧目语言</span>
                <span>剧目类型</span>
                <span>剧目时长</span>
                <span>剧目票价</span>
                <span>剧目状态</span>
            </div>
                {p}
            </div>
        </div>
    }
}
