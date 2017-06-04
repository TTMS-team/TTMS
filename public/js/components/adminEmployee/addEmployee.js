require ('../../../css/style.css');
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
            alert("添加成功！");
            browserHistory.push('/adminPage');
        } else {
            alert("添加失败！");
        }
    }

    
    render() {

        return <div className="pageBody" >
            <div class="form-group" className="col">
               <label className="split"> 姓名 </label><input type="text" className="addInput"  ref="emp_name"/>
                <label className="split"> 性 别 </label><input type="text" className="addInput" ref="emp_sex"/>
                <label className="split"> 年  龄 </label><input type="text" className="addInput" ref="emp_age"/>
            </div>
            <div  className="col">
                <label className="split"> 密 码</label><input type="text" className="addInput" ref="emp_password"/>
                <label className="split"> 电 话</label><input type="text" className="addInput" ref="emp_tel_num"/>
                <label className="split"> 邮  箱</label><input type="text" className="addInput" ref="emp_email"/>
            </div>
            <div  className="col">
                <label className="split" > 住 址</label><input type="text" className="addInput" ref="emp_addr"/>
                <label className="split"> 假 期</label><input type="text" className="addInput" ref="emp_holiday"/>
                <label className="split"> 月  薪 </label><input type="text" className="addInput" ref="emp_month_money"/>
            </div>
            <div  className="col">
                <label className="split"> 年 薪</label><input type="text"  className="addInput" ref="emp_sum_money"/>
                <label className="split"> 职 位</label><input type="text" className="addInput" ref="emp_position"/>
                <label className="split"> 入职日期</label><input type="text" className="addInput" ref="emp_induction_time"/>
            </div>
            <button className="addSubButton" onClick={this.addEmployee.bind(this)}>提交</button>
        </div>
    }
}
