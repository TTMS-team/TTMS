import React from 'react';
import {browserHistory} from 'react-router';


export default class AddEmployee extends React.Component {
    addEmployee(){
        var info= {"emp_addr":this.refs.emp_addr.value,
            "emp_age":this.refs.emp_age.value,
            "emp_email":this.refs.emp_email.value,
            "emp_holiday":this.refs.emp_holiday.value,
            "emp_induction_time":this.refs.emp_induction_time.value,
            "emp_month_money":this.refs.emp_month_money.value,
            "emp_name":this.refs.emp_name.value,
            "emp_password":this.refs.emp_password.value,
            "emp_position":this.refs.emp_position.value,
            "emp_sex":this.refs.emp_sex.value,
            "emp_sum_money":this.refs.emp_sum_money.value,
            "emp_tel_num":this.refs.emp_tel_num.value};
        
        this.props.addEmployee(info);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addEmployeeTip) {
            browserHistory.push('/adminPage');
        } else {
            alert("添加失败！");
        }
    }

    
    render() {

        return <div>
            <label>姓名</label><input type="text" ref="emp_name"/>
            <label>性别</label><input type="text" ref="emp_sex"/>
            <label>年龄</label><input type="text" ref="emp_age"/>
            <label>密码</label><input type="text" ref="emp_password"/>


            <label>电话</label><input type="text" ref="emp_tel_num"/>
            <label>邮箱</label><input type="text" ref="emp_email"/>
            <label>住址</label><input type="text" ref="emp_addr"/>
            <label>假期</label><input type="text" ref="emp_holiday"/>

            <label>月薪</label><input type="text" ref="emp_month_money"/>
            <label>年薪</label><input type="text" ref="emp_sum_money"/>
            <label>职位</label><input type="text" ref="emp_position"/>
            <label>入职日期</label><input type="text" ref="emp_induction_time"/>
            
            <button onClick={this.addEmployee.bind(this)}>提交</button>

        </div>
    }
}
