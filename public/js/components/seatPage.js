import React from 'react';
import Title from './title';
import {Link} from 'react-router';

export default class ConductorPage extends React.Component {
    componentWillMount() {
        this.props.getStudioInfo(this.props.location.query.studio_id);
    }


    render() {
        console.log(this.props.studioInfo)
        var p=[];
        var studioInfo=this.props.studioInfo[0];
        if(studioInfo){

            var row=studioInfo.studio_row_count+1;
            var col=studioInfo.studio_col_count+1;

            //row 5 col 6
            for(var i=0;i<row;i++){
                for(var j=0;j<col;j++){
                    if(i===j&&i===0){
                        p.push(<span></span>)
                    }else{
                        if(j===col-1){
                            if(i===0){
                                p.push(<span>{j}</span>)
                            }else{
                                p.push(<span>座</span>);
                            }
                            p.push(<br/>)
                        }else{
                            if(i===0){
                                p.push(<span>{j}</span>)
                            }else if(j===0){
                                p.push(<span>{i}</span>)
                            }else {
                                p.push(<span>座</span>);
                            }
                        }
                    }
                }
            }
        }


        return <div>
            <Title username={this.props.username}/>
            <div>
                <div>银幕</div>
                {p}
            </div>
        </div>
    }
}