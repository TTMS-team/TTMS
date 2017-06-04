import React from 'react';
import {browserHistory} from 'react-router';


export default class Studio extends React.Component {
    componentWillMount(){
        this.props.getStudioList();
    } 
     

    
    addStudio(){
        browserHistory.push('/addStudio');
    }
    
    searchStudio(){
        var id=this.refs.searchInput.value;
        this.props.searchStudioById(id);
    }

    deleteStudio(studio_id){
        this.props.deleteStudio(studio_id);
    }

    modifyStudio(studio_id){
        browserHistory.push(`/modifyStudio?id=${studio_id}`);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteStudioTip) {
            this.props.getStudioList();
            alert("删除成功！")
        }
    }

    render() {
        
        var p=this.props.studioList.map((value,index)=>{
            return <div>
                <div>
                    <span>{value.studio_id}</span>
                    <span>{value.studio_name}</span>
                    <span>{value.studio_row}</span>
                    <span>{value.studio_col}</span>
                    <input type="button" value="修改" onClick={this.modifyStudio.bind(this,value.studio_id)}/>
                    <input type="button" value="删除" onClick={this.deleteStudio.bind(this,value.studio_id)}/>
                </div>
            </div>
        });


        return <div className="mainView">
            <div>
                <input type="text" ref="searchInput" />
                <button onClick={this.searchStudio.bind(this)}>查询</button>
                <button onClick={this.addStudio.bind(this)}>添加</button>
            </div>
            <div>
                <span>演出厅ID</span>
                <span>演出厅名称</span>
                <span>演出厅行数</span>
                <span>演出厅列数</span>
            </div>
            {p}
        </div>
    }
}

