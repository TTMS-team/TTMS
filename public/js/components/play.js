import React from 'react';
import {browserHistory} from 'react-router';


export default class Play extends React.Component {



    render() {


        return <div className="mainView">

            <div>
                <div>
                <span className="playSpan">剧目编号</span>
                <span className="playSpan">剧目名称</span>
                <span className="playSpan">剧目语言</span>
                <span className="playSpan">剧目类型</span>
                <span className="playSpan">剧目时长</span>
                <span className="playSpan">剧目票价</span>
                <span className="playSpan">剧目状态</span>
            </div>
            
            </div>
        </div>
    }
}
