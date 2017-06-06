import React from 'react';
import Title from './title';
import {Link} from 'react-router';

export default class ConductorPage extends React.Component {
    constructor(props){
       super(props)
        this.state={
            orderList:[]
        }
    }

    componentWillMount() {
        this.props.getStudioInfo(this.props.location.query.studio_id);
    }

    showOrderList(row,col){
        var arr=this.state.orderList;
        arr.push({"row":row,"col":col});
        this.setState({
            orderList:arr
        })

    }

    render() {
        var p=[];
        var studioInfo=this.props.studioInfo[0];
        if(studioInfo){

            var row=studioInfo.studio_row_count+1;
            var col=studioInfo.studio_col_count+1;

            for(var i=0;i<row;i++){
                for(var j=0;j<col;j++){
                    if(i===j&&i===0){
                        p.push(<span></span>)
                    }else{
                        if(j===col-1){
                            if(i===0){
                                p.push(<span>{j}</span>)
                            }else{
                                p.push(<span onClick={this.showOrderList.bind(this,i,j)}>{`${i}排${j}座`}</span>);
                            }
                            p.push(<br/>)
                        }else{
                            if(i===0){
                                p.push(<span>{j}</span>)
                            }else if(j===0){
                                p.push(<span>{i}</span>)
                            }else {
                                p.push(<span onClick={this.showOrderList.bind(this,i,j)}>{`${i}排${j}座`}</span>);
                            }
                        }
                    }
                }
            }
        }
        console.log(this.state.orderList)
        var order=this.state.orderList.map((value,index)=>{
           return <div>
               <span>{`${value.row}行${value.col}座`}</span>
           </div>
        });

        return <div>
            <Title username={this.props.username}/>
            <div>
                <div>银幕</div>
                {p}
            </div>
            <div>
                已选座位
                {order}
                <button>确认购买</button>
            </div>
        </div>
    }
}