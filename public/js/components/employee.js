import React from 'react';
import {browserHistory} from 'react-router';



export default class Employee extends React.Component {

    componentWillMount() {
        this.props.getEmployeeList();
    }

    searchEmployee(){
        var id=this.refs.searchInput.value;
        this.props.searchEmployeeById(id);
    }

    modifyEmployee(emp_id){
        browserHistory.push(`/modifyEmployee?id=${emp_id}`);
    }

    deleteEmployee(emp_id){  //finished
        this.props.deleteEmployee(emp_id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteTip) {
            this.props.getEmployeeList();
            alert("删除成功！")
        } 
    }
    
    addEmployee(){
        browserHistory.push('/addEmployee');
    }

    render() {
        var p=this.props.employeeList.map((value,index)=>{
            return <div>
                <span>{value.emp_id}</span>
                <span>{value.emp_name}</span>
                <span>{value.emp_sex}</span>
                <span>{value.emp_age}</span>
                <span>{value.emp_position}</span>
                <span>{value.emp_tel_num}</span>
                <input type="button" value="修改"  onClick={this.modifyEmployee.bind(this,value.emp_id)}/>
                <input type="button" value="删除" onClick={this.deleteEmployee.bind(this,value.emp_id)}/>
            </div>
        });
        
        return <div className="mainView">
            <div>
                    <input type="text" ref="searchInput"/>
                    <button onClick={this.searchEmployee.bind(this)}>查询</button>
                    <button onClick={this.addEmployee.bind(this)}>添加</button>
            </div>
            <div>
                <div>
                    <span>工号</span>
                    <span>姓名</span>
                    <span>性别</span>
                    <span>年龄</span>
                    <span>职位</span>
                    <span>电话</span>
                </div>
                {p}
            </div>
        </div>
    }
}
