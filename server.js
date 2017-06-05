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


//获取全体员工数组 over
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

//添加员工  over
app.post('/addEmployee',function (req,res) {
    var info=req.body;   //数据可传递
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeAdd?name='+info.emp_name+'&password='+info.emp_password+'&position='+info.emp_position
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

//根据id删除员工  over
app.get("/deleteEmployee/:id",function (req,res) {
    var emp_id=req.params.id;
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeDelete?id='+emp_id
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

//根据id查找员工  over
app.get("/searchEmployee/:id",function(req,res){
   var emp_id=req.params.id; //前后端跑通
   //前端接受一个数组
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeQueryId?id='+emp_id
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

//修改员工信息   服务器总是返回false  可能是有些信息服务器设置的不能为空导致url错误
app.post("/updateEmployeeModify",function (req,res) {
    var info=req.body;
    var resData="";
    // var options = {
    //     method: 'GET',
    //     url: 'http://115.159.82.119:8080/Movie/employee/EmployeeUpdata?id='
    //     +info.id+'&name='+info.name+'&password='+info.password
    //     +'&position='+info.position+'&tel='+info.tel+'&addr='+info.addr
    //     +'&email='+info.email+'&induction='+info.induction+'&month='+info.monthMoney
    //     +'&sum='+info.sumMoney+'&holiday='+info.holiday+'&age='+info.age+'&sex='+info.sex
    // };
    //
    // request(options,function (err,response,body) {
    //     if (response) {
    //          resData=body;
    //         console.log(resData)
    //         res.json(resData);
    //     } else {
    //         console.log(err);
    //
    //     }
    // });
    res.json("true")
});








//获取演出厅列表  over
app.get("/getStudioList",function (req,res) {
    //[{studio}]
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/studio/StudioQueryAll'
    };
    request(options,function (err,response,body) {
        if (response) {
            resData = body;
            res.json(resData);
        } else {
            console.log(err);
        }
    })
});

//添加演出厅   不能为空，否则报错
app.post("/addStudio",function (req,res) {
    var info=req.body;
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/studio/StudioAdd?studio_name='+info.studio_name+'&studio_row_count='+info.studio_row_count+'&studio_col_count='+info.studio_col_count+'&studio_introduction='+info.studio_introduction+'&studio_isavailable='+info.studio_isavailable
    };
    console.log(options.url);
    request(options,function (err,response,body) {
        if (response) {
            res.json(body);
        } else {
            console.log(err);
        }
    });
});

//根据name查找演出厅  有的查不到
app.get("/searchStudio/:id",function(req,res){
    var studio_id=req.params.id; //前后端跑通
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/studio/StudioQueryName?name='+studio_id
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

//根据ID删除演出厅  over
app.get("/deleteStudio/:id",function (req,res) {
    var studio_id=req.params.id;
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/studio/StudioDelete?id='+studio_id
    };
    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            res.json(resData);
        } else {
            console.log(err);
        }
    });
    // res.json("true");
});

//修改演出厅  由于查找有问题 所以无法使用ID进行旧信息的获取
app.post("/updateStudioModify",function (req,res) {

   // http:// 115.159.82.119:8080/Movie/studio/StudioUpdata?
        // studio_name=1&studio_row_count=1&studio_col_count=1
        // &studio_introduction=1&studio_isavailable=1&studio_id=1
    var info=req.body;
    console.log(info)
    var resData="";
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeUpdata?id='
        +info.id+'&name='+info.name+'&password='+info.password
        +'&position='+info.position+'&tel='+info.tel+'&addr='+info.addr
        +'&email='+info.email+'&induction='+info.induction+'&month='+info.monthMoney
        +'&sum='+info.sumMoney+'&holiday='+info.holiday+'&age='+info.age+'&sex='+info.sex
    };

    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            // console.log(resData)
            res.json(resData);
        } else {
            console.log(err);

        }
    });
    res.json("true");
});


//获取剧目列表
app.get("/getPlayList",function (req,res) {
   res.json([{"play_id":1,"play_name":2,"play_lang_id":3,"play_type_id":4,"play_length":5,"play_ticket_price":6,"play_status":7}]);
});
//根据ID查找剧目
app.get("/searchPlay/:id",function (req,res) {
   var play_id= req.params.id;//over
});
//根据ID删除剧目
app.get("/deletePlay/:id",function (req,res) {
    var play_id=req.params.id;//over
    var resData=[];
    // { id: '1',
    //     name: '',
    //     lang: '',
    //     type: '',
    //     length: '',
    //     int: 'ccccc',
    //     price: '',
    //     status: '' }

    console.log(play_id)
    // var options = {
    //     method: 'GET',
    //     url: 'http://115.159.82.119:8080/Movie/studio/StudioDelete?id='+studio_id
    // };
    // request(options,function (err,response,body) {
    //     if (response) {
    //         resData=body;
    //         res.json(resData);
    //     } else {
    //         console.log(err);
    //     }
    // });
    res.json("truey");
});
// /addPlay
app.post('/addPlay',function (req,res) {
    var info=req.body;   //over
    var resData=[];
    // console.log(info)
    // { play_name: '33',
    //     play_lang_id: '22',
    //     play_type_id: '33',
    //     play_length: '22',
    //     play_ticket_price: '33',
    //     play_introduction: '33',
    //     'value.play_status': '22' }

    // var options = {
    //     method: 'GET',
    //     url: 'http://115.159.82.119:8080/Movie/employee/EmployeeAdd?name='+info.emp_name+'&password='+info.emp_password+'&position='+info.emp_position
    // };
    // request(options,function (err,response,body) {
    //     if (response) {
    //         resData=body;
    //         res.json(resData);
    //     } else {
    //         console.log(err);
    //
    //     }
    // });
    res.json("truerrr");
});
// updatePlayModify
app.post("/updatePlayModify",function (req,res) {

    var info=req.body;
    console.log(info)
    // var resData="";
    // var options = {
    //     method: 'GET',
    //     url: 'http://115.159.82.119:8080/Movie/employee/EmployeeUpdata?id='
    //     +info.id+'&name='+info.name+'&password='+info.password
    //     +'&position='+info.position+'&tel='+info.tel+'&addr='+info.addr
    //     +'&email='+info.email+'&induction='+info.induction+'&month='+info.monthMoney
    //     +'&sum='+info.sumMoney+'&holiday='+info.holiday+'&age='+info.age+'&sex='+info.sex
    // };
    //
    // request(options,function (err,response,body) {
    //     if (response) {
    //         resData=body;
    //         // console.log(resData)
    //         res.json(resData);
    //     } else {
    //         console.log(err);
    //
    //     }
    // });
    // res.json("true");
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