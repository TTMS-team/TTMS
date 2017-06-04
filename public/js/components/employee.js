require ('../../css/style.css');
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
<<<<<<< HEAD
            return <div>
                <span>{value.emp_id}</span>
                <span>{value.emp_name}</span>
                <span>{value.emp_sex}</span>
                <span>{value.emp_age}</span>
                <span>{value.emp_position}</span>
                <span>{value.emp_tel_num}</span>
                <input type="button" value="修改"  onClick={this.modifyEmployee.bind(this,value.emp_id)}/>
                <input type="button" value="删除" onClick={this.deleteEmployee.bind(this,value.emp_id)}/>
=======
            return <div >
                <span className="table1">{value.emp_id}</span>
                <span className="table2">{value.emp_name}</span>
                <span className="table1">{value.emp_sex}</span>
                <span className="table4">{value.emp_age}</span>
                <span className="table3">{value.emp_position}</span>
                <span className="table2">{value.emp_tel_num}</span>
                <Link to={`/modifyEmployee?id=${value.emp_id}`}><input className="searchButton" type="button" value="修改"  onClick={this.modifyEmployee.bind(this,value.emp_id)}/></Link>
                <input type="button"  className="searchButton" value="删除" onClick={this.deleteEmployee.bind(this,value.emp_id)}/>
>>>>>>> 07cef0a821c9ec9fa9c613025ce439a2f508edc0
            </div>
        });
        
        return <div className="mainView">
            <div>
                    <input className="search" type="text" ref="searchInput"/>
                    <button  className="searchButton" onClick={this.searchEmployee.bind(this)}>查询</button>
                    <button  className="searchButton" onClick={this.addEmployee.bind(this)}>添加</button>
            </div>
            <div>
                <div >
                    <span className="table">工号</span>
                    <span className="table">姓名</span>
                    <span className="table">性别</span>
                    <span className="table">年龄</span>
                    <span className="table">职位</span>
                    <span className="table">电话</span>
                </div>
                {p}
            </div>
        </div>
    }
}
