import React from 'react';
import Title from './title';
import {Link} from 'react-router';

export default class ConductorPage extends React.Component {
    componentWillMount() {
        //studio_id
        this.props.getSeats(this.props.location.query.id);
    }


    render() {

        

        return <div>
            <Title username={this.props.username}/>
            <div>
                <div>银幕</div>
            </div>
        </div>
    }
}