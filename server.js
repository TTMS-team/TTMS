const express=require("express");
const app=express();
const path = require('path');

const login=require('./routes/login');

app.use(express.static(__dirname + '/public'));


app.get("/",function (req,res) {
    res.sendfile('index.html');
});
app.get("/login",login);


app.listen(3000,()=>{
    console.log("server start success listen at port 3000")
});