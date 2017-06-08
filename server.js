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
app.post("/login",function (req,res) {
    var info=req.body;
    // { username: '333', password: '222' }
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeQueryId?id='+info.username
    };
    request(options,function (err,response,body) {
        if (response) {
          //  [{"emp_addr":"陕西省彬县","emp_age":"432","emp_email":"2870466010@","emp_holiday":"34","emp_id":4143100,"emp_image":"","emp_induction_time":"2016/3/6","emp_month_money":"30K","emp_name":"李文朋","emp_password":"123456","emp_position":"经理","emp_sex":"男","emp_sum_money":"110K","emp_tel_num":"18240800871"}]

            console.log(body)
            res.json(body);
        } else {
            console.log(err);

        }
    });

});


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
    // console.log(info)
    var resData="";
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/employee/EmployeeUpdata?id='
        +info.id+'&name='+info.name+'&password='+info.password
        +'&position='+info.position+'&tel='+info.tel+'&addr='+info.addr
        +'&email='+info.email+'&induction='+info.induction+'&month='+info.monthMoney
        +'&sum='+info.sumMoney+'&holiday='+info.holiday+'&age='+info.age+'&sex='+info.sex
    };
    console.log(options.url);
    request(options,function (err,response,body) {
        if (response) {
             resData=body;
            console.log(body);
            res.json(resData);
        } else {
            console.log(err);
        }
    });
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
    // console.log(options.url);
    request(options,function (err,response,body) {
        if (response) {
            res.json(body);
        } else {
            console.log(err);
        }
    });
});

//根据id查找演出厅  over
app.get("/searchStudio/:id",function(req,res){
    var studio_id=req.params.id; //id可收到
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
});

//修改演出厅  由于查找有问题 所以无法使用ID进行旧信息的获取
app.post("/updateStudioModify",function (req,res) {
  
    var info=req.body;
    console.log(info);
   
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/studio/StudioUpdata?studio_name='
        +encodeURI(info.name)+'&studio_row_count='+info.row+'&studio_col_count='+info.col
        +'&studio_introduction='+encodeURI(info.int)+'&studio_isavailable='+encodeURI(info.ava)+'&studio_id='+info.id
    };
 
    request(options,function (err,response,body) {
        if (response) {
            console.log(body)
            res.json(body);
        } else {
            console.log(err);

        }
    });
    // res.json("true");
});








//获取剧目列表
app.get("/getPlayList",function (req,res) {
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/play/PlayQueryAll'
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
//根据ID查找剧目
app.get("/searchPlay/:id",function (req,res) {
   var play_id= req.params.id;//over
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/play/PlayQueryId?id='+play_id
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
//根据ID删除剧目
app.get("/deletePlay/:id",function (req,res) {
    var play_id=req.params.id;//over
    console.log(play_id)
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/play/PlayDelete?id='+play_id
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
//增加剧目
app.post('/addPlay',function (req,res) {
    var info=req.body;   //over
    var resData=[];

    var options = {
        method: 'GET',
        url:' http://115.159.82.119:8080/Movie/play/PlayAdd?'+
        'play_type_id='+info.play_type_id+
        '&play_lang_id='+info.play_lang_id+
        '&play_name='+ info.play_name+
        '&play_introduction='+info.play_introduction+
        '&play_length=' +info.play_length+
        '&play_ticket_price='+info.play_ticket_price+
        '&play_status='+info.play_status
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
// 修改剧目
app.post("/updatePlayModify",function (req,res) {
    var info=req.body;

    var options = {
            method: 'GET',
            url:'http://115.159.82.119:8080/Movie/play/PlayUpdata?'+
            'play_type_id='+info.type+
            '&play_lang_id='+info.lang+
            '&play_name='+ info.name+
            '&play_introduction='+info.int+
            '&play_length=' +info.length+
            '&play_ticket_price='+info.price+
            '&play_status='+info.status+
                '&id='+info.id
        };
    request(options,function (err,response,body) {
        if (response) {
            res.json(body);
        } else {
            console.log(err);

        }
    });
});












// 获取全部票列表
app.get("/getTicketList",function (req,res) {
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/ticket/TicketQueryAll'
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
//根据ID删除票
app.get("/deleteTicket/:id",function (req,res) {
    var ticket_id=req.params.id;//over
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/ticket/TicketDelete?id='+ticket_id
    };
    request(options,function (err,response,body) {
        if (response) {
            console.log(body)
            res.json(body);
        } else {
            console.log(err);
        }
    });
});
app.get("/searchTicket/:id",function (req,res) {
    var ticket_id= req.params.id;
    console.log(ticket_id)
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/ticket/TicketQueryId?ticket_id='+ticket_id
    };
    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            console.log(body);
            res.json(resData);
        } else {
            console.log(err);
        }
    });
});

// /getScheduleList
app.get("/getScheduleList",function (req,res) {
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/schedule/ScheduleQueryAll'
    };
    request(options,function (err,response,body) {
        if (response) {
            resData = body;
            // console.log(body);
            res.json(resData);
        } else {
            console.log(err);
        }
    })
    // res.json([{ticket_id:555,seat_id:1,sched_id:2,ticket_price:3,ticket_status:5,ticket_locked_time:6}])
});
app.get("/searchSchedule/:id",function (req,res) {
    var sched_id= req.params.id;
    var resData=[];
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/schedule/ScheduleQueryId?id='+sched_id
    };
    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            // console.log(body)
            res.json(resData);
        } else {
            console.log(err);
        }
    });
});
app.get("/deleteSchedule/:id",function (req,res) {
    var sched_id=req.params.id;//over
    // console.log(sched_id)
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/schedule/ScheduleDelete?id='+sched_id
    };
    request(options,function (err,response,body) {
        if (response) {
            console.log(body)
            res.json(body);
        } else {
            console.log(err);
        }
    });
});
app.post('/addSchedule',function (req,res) {
    var info=req.body;   //over
    var resData=[];
    console.log(info);
   // http:// 115.159.82.119:8080/Movie/schedule/ScheduleAdd
    // ?studio_id=1&play_id=1&sched_time=1&sched_ticket_price=1
    // { play_id: 'ee',
    //     sched_ticket_price: 'qq',
    //     sched_time: 'ee',
    //     studio_id: 'qq' }

    var options = {
        method: 'GET',
        url:' http://115.159.82.119:8080/Movie/schedule/ScheduleAdd?'+
        'studio_id='+info. studio_id+
        '&play_id='+info.play_id+
        '&sched_time='+ info.sched_time+
        '&sched_ticket_price='+info.sched_ticket_price
    };

    request(options,function (err,response,body) {
        if (response) {
            resData=body;
            console.log(body)
            res.json(resData);
        } else {
            console.log(err);

        }
    });
});












app.get('/getScheduleListByPlayId/:id',function (req,res) {
    var play_id=req.params.id;
    var options = {
        method: 'GET',
        url: 'http://115.159.82.119:8080/Movie/schedule/ScheduleQueryPlayId?playid='+play_id
    };
    request(options,function (err,response,body) {
        if (response) {
            // console.log(body)
            res.json(body);
        } else {
            console.log(err);
        }
    })
})

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
});


app.get("/returnTicket/:id",function (req,res) {
    var ticket_id=req.params.id;
    console.log(ticket_id)
    res.json("true");
});

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});

