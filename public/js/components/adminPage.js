import React from 'react';
import Title from './title';

export default class AdminPage extends React.Component {
    

    render() {

        //film:[{filmName:xx,duration,type,director,language}...]


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