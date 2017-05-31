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
            return <div>
                <Link to={`/schedulePage?id=${value.play_id}&playName=${value.play_name}`}>
                    <div>
                        <span>{value.play_name}</span>
                        <span>{value.play_type_id}</span>
                        <span>{value.play_length}</span>
                        <span>{value.play_lang_id}</span>
                    </div>
                </Link>
            </div>
        });


        return <div>
            <Title username={this.props.username}/>
            <div>
                <input type="text" placeholder="请输入影片名"/>
                <button>查找</button>
                <button>退票</button>
            </div>
            <div>
                {filmList}
            </div>
        </div>
    }
}