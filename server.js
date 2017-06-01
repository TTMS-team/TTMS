const express=require("express");
const app=express();
const path = require('path');

const login=require('./routes/login');

app.use(express.static(__dirname + '/public'));


app.get("/",function (req,res) {
    res.sendfile('index.html');
});

app.get("/login",login);

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