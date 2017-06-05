require ('../../../css/style.css');
require('../../../css/employeeStyle.css');
import React from 'react';
import {browserHistory} from 'react-router';


export default class ModifyEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            sex: null,
            age: null,
            password:null,

            tel:null,
            email:null,
            addr:null,
            holiday:null,

            monthMoney:null,
            sumMoney:null,
            position:null,
            induction:null


        }
    }

    componentWillMount() {
        this.props.getOldEmployeeInfo(this.props.location.query.id);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.updateEmployeeTip) {
            alert("修改成功！");
            browserHistory.push('/adminPage');
        }
    }

    upDateEmployeeModify(){
          this.props.upDateEmployeeModify({
              id:this.props.location.query.id,

              name:this.refs.emp_name.value,
              age:this.refs.emp_age.value,
              sex:this.refs.emp_sex.value,
              tel: this.refs.emp_tel_num.value,

              password: this.refs.emp_password.value,
              email: this.refs.emp_email.value,
              addr: this.refs.emp_addr.value,
              holiday: this.refs.emp_holiday.value,
              
              monthMoney: this.refs.emp_month_money.value,
              sumMoney: this.refs.emp_sum_money.value,
              position: this.refs.emp_position.value,
              induction: this.refs.emp_induction_time.value
          });
    }

    onchangeName(){
        this.setState({
            name: this.refs.emp_name.value
        });
    }

    onchangeSex(){
        this.setState({
            sex: this.refs.emp_sex.value
        });
    }
    onchangeAge(){
        this.setState({
            age: this.refs.emp_age.value
        });
    }
    onchangePassword(){
        this.setState({
            password: this.refs.emp_password.value
        });
    }
    onchangeTel(){
        this.setState({
            tel: this.refs.emp_tel_num.value
        });
    }
    onchangeEmail(){
        this.setState({
            email: this.refs.emp_email.value
        });
    }
    onchangeAddr(){
        this.setState({
            addr: this.refs.emp_addr.value
        });
    }
    onchangeHoliday(){
        this.setState({
            holiday: this.refs.emp_holiday.value
        });
    }
    onchangeMonthMoney(){
        this.setState({
            monthMoney: this.refs.emp_month_money.value
        });
    }
    onchangeSumMoney(){
        this.setState({
            sumMoney: this.refs.emp_sum_money.value
        });
    }
    onchangePosition(){
        this.setState({
            position: this.refs.emp_position.value
        });
    }
    onchangeInduction(){
        this.setState({
            induction: this.refs.emp_induction_time.value
        });
    }
    render() {

        var oldInfo=this.props.oldEmployeeInfo[0];

        const name=this.state.name ===null ? oldInfo.emp_name:this.state.name;
        const sex=this.state.sex ===null ? oldInfo.emp_sex:this.state.sex;
        const age=this.state.age ===null ? oldInfo.emp_age:this.state.age;
        const password=this.state.password ===null ? oldInfo.emp_password:this.state.password;
        const tel=this.state.tel ===null ? oldInfo.emp_tel_num:this.state.tel;
        const email=this.state.email ===null ? oldInfo.emp_email:this.state.email;
        const addr=this.state.addr ===null ? oldInfo.emp_addr:this.state.addr;
        const holiday=this.state.holiday ===null ? oldInfo.emp_holiday:this.state.holiday;
        const monthMoney=this.state.monthMoney ===null ? oldInfo.emp_month_money:this.state.monthMoney;
        const sumMoney=this.state.sumMoney ===null ? oldInfo.emp_sum_money:this.state.sumMoney;
        const position=this.state.position ===null ? oldInfo.emp_position:this.state.position;
        const induction=this.state.induction ===null ? oldInfo.emp_induction_time:this.state.induction;

        return <div className="pageBody">
            <div class="form-group" className="col">
                <label label className="split">姓 名</label><input  className="addInput"  type="text" value={name} ref="emp_name" onChange={this.onchangeName.bind(this)}/>
                <label label className="split">性 别</label><input  className="addInput" type="text" value={sex} ref="emp_sex" onChange={this.onchangeSex.bind(this)}/>
                <label label className="split">年 龄</label><input  className="addInput" type="text" value={age} ref="emp_age" onChange={this.onchangeAge.bind(this)}/>
            </div>
            <div className="col">
                <label label className="split">密 码</label><input  className="addInput" type="text" value={password} ref="emp_password" onChange={this.onchangePassword.bind(this)}/>
                <label label className="split">电 话</label><input  className="addInput" type="text" value={tel} ref="emp_tel_num" onChange={this.onchangeTel.bind(this)}/>
                <label label className="split">邮 箱</label><input  className="addInput" type="text"  value={email} ref="emp_email"onChange={this.onchangeEmail.bind(this)}/>
            </div>
            <div className="col">
                <label label className="split">住 址</label><input  className="addInput" type="text" value={addr} ref="emp_addr" onChange={this.onchangeAddr.bind(this)}/>
                <label label className="split">假 期</label><input  className="addInput" type="text"  value={holiday} ref="emp_holiday" onChange={this.onchangeHoliday.bind(this)}/>
                <label label className="split">月 薪</label><input  className="addInput" type="text" value={monthMoney} ref="emp_month_money" onChange={this.onchangeMonthMoney.bind(this)}/>
            </div>
            <div className="col">
                <label label className="split">年 薪</label><input  className="addInput" type="text"  value={sumMoney} ref="emp_sum_money" onChange={this.onchangeSumMoney.bind(this)}/>
                <label label className="split">职 位</label><input   className="addInput" type="text" value={position} ref="emp_position" onChange={this.onchangePosition.bind(this)}/>
                <label label className="split">入职日期</label><input className="addInput" type="text" value={induction}  ref="emp_induction_time" onChange={this.onchangeInduction.bind(this)}/>
            </div>

            <button className="addSubButton" onClick={this.upDateEmployeeModify.bind(this)}>确认修改</button>
        </div>
    }
}

