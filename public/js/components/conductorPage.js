require('../../css/conductorPageStyle.css');

import React from 'react';
import Title from './title';
import {Link} from 'react-router';

export default class ConductorPage extends React.Component {
    componentWillMount() {
        this.props.getFilms();
    }


    render() {

        //film:[{filmName:,duration,type,director,language}...]
        

        var filmList=this.props.films.map((value,key)=>{
            return <div >
                <Link to={`/schedulePage?id=${value.play_id}&playName=${value.play_name}`}>
                    <div >
                        <span className="conductorSpan">{value.play_name}</span>
                        <span className="conductorSpan">{value.play_type_id}</span>
                        <span className="conductorSpan">{value.play_length}</span>
                        <span className="conductorSpan">{value.play_lang_id}</span>
                    </div>
                </Link>
            </div>
        });


        return <div>
            <Title username={this.props.username}/>
            <div>
                <input  className="search" type="text" placeholder="请输入影片名"/>
                <button className="searchButton">查找</button>
                <button className="searchButton">退票</button>
            </div>
            <div className="mainView1">
                {filmList}
            </div>
        </div>
    }
}