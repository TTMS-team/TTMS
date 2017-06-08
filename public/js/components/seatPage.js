import React from 'react';
import Title from './title';
require('../../css/seatStyle.css');
import {browserHistory} from 'react-router';


export default class ConductorPage extends React.Component {
    constructor(props){
       super(props);
        this.state={
            orderList:[],
            seatStyle:"seatSpan glyphicon glyphicon-bed"
        }
    }

    componentWillMount() {
        this.props.getStudioInfo(this.props.location.query.studio_id);
    }

    showOrderList(row,col,e){
        e.target.className=e.target.className==="seatSpan2 glyphicon glyphicon-bed"?"seatSpan1 glyphicon glyphicon-bed":"seatSpan2 glyphicon glyphicon-bed";
        var arr=this.state.orderList;
        var tag=999;
        for(var i=0;i<arr.length;i++){
            if(arr[i].row===row&&arr[i].col===col){
                tag=i;
            }
        }
        if(tag!==999){
            arr.splice(tag,1);
        }else{
            arr.push({"row":row,"col":col});

        }
        this.setState({
            orderList:arr
        })
    }
    buyTicket(){
        alert("购买成功！");
        browserHistory.push('/conductorPage');
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
                        p.push(<span className="seatSpan1 "></span>);
                    }else{
                        if(j===col-1){
                            if(i===0){
                                p.push(<span className="seatSpan1 ">{j}</span>)
                            }else{
                                p.push(<span className={this.state.seatStyle} onClick={this.showOrderList.bind(this,i,j)}></span>);
                            }
                            p.push(<br/>)
                        }else{
                            if(i===0){
                                p.push(<span className="seatSpan1">{j}</span>)
                            }else if(j===0){
                                p.push(<span className="seatSpan1">{i}</span>)
                            }else {
                                p.push(<span  className={this.state.seatStyle} onClick={this.showOrderList.bind(this,i,j)}></span>);
                            }
                        }
                    }
                }
            }
        }
        console.log(this.state.orderList)
        var order=this.state.orderList.map((value,index)=>{
           return <div className="buySeat">
               <span>{`${value.row}行${value.col}座`}</span>
           </div>
        });

        return <div className="pageBody1">
            <Title username={this.props.username}/>
            <div className="seatMainView">
                <div className="screen">银幕</div>
                <div className="seat"> {p}</div>
            </div>
            <div className="buyView">
                <div className="setTitle">
                已选座位
                </div>
                {order}
               <div className="seatButton"> <button onClick={this.buyTicket.bind(this)}>确认购买</button></div>
            </div>
        </div>
    }
}