const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended :true}))
app.get("/",function(req,res){
    //console.log(req);
    res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){
    var n1 =Number(req.body.n1);
    var n2 =Number(req.body.n2);
    var result  = Number(n1+n2);
    res.send("Thank you baby"+result);



})
app.get("/contact",function(req,res){
    //console.log(req);

    res.send("<h1>If you are a girl then only contact me </h1>");

});
app.listen(3000,function(){
    console.log("hello");
});