const express=require("express");
const app=express();
const path = require('path');
var request = require("request");
const bodyParser = require('body-parser');


const login=require('./routes/login');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function (req,res) {
    res.sendfile('index.html');
});


app.get("/login",login);

//获取全体员工数组
app.get("/getEmployeeList",function (req,res) {
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeQueryAll'
    };
    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            res.json(resData);

        } else {
            console.log(err);

        }
    });

});

//添加员工
app.post('/addEmployee',function (req,res) {
    var info=req.body;   //数据可传递

    console.log(info);
});

//根据id删除员工
app.get("/deleteEmployee/:id",function (req,res) {
    var emp_id=req.params.id;
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeQueryAll'
    };
    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            res.json(resData);

        } else {
            console.log(err);

        }
    });
});

//根据id查找员工
app.get("/searchEmployee/:id",function(req,res){
    var emp_id=req.params.id; //id输出成功
});



app.get("/getFilmsList",function (req,res) {
    //film:[{filmName:xx,duration,type,director,language}...]
    res.json([{play_id:"11111",play_type_id:"22222",play_lang_id:"33333",
        play_name:"西游记",play_introduction:"55555",play_length:"kk",
        play_ticket_price:"",play_status:"jj"}
        ,{play_id:"11111",play_type_id:"22222",play_lang_id:"33333",
            play_name:"西游记2",play_introduction:"55555",play_length:"kk",
            play_ticket_price:"",play_status:"jj"}])
});

//根据play_id查找演出计划
app.get("/getSchedule/:id",function (req,res) {
    var play_id=req.params.id;
    res.json([{studio_name:"",time_id:"",sched_ticket_price:"",play_length:""}])

});

//根据studio_id查找座位信息
app.get("/getSeatsList/:id",function (req,res) {
    var studio_id=req.params.id;
    res.json([])
})

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});