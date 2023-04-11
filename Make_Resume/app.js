const express = require('express');
const bodyParser = require('body-parser');

const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static("storage"));
app.get("/",function(req,res){
    res.sendfile(__dirname+"/index.html");
    //console.log(req);

    //res.send("welcome aboard to server 3000");

});
app.post("/",function(req,res){
    var n1 =req.body.FN;
    var n2 =req.body.LN;
    var n3 = req.body.EN;
    console.log(n1,n2,n3);
    
    res.send("Thank you baby");



});
app.listen(3000,function(){
    console.log("hello");
});


// api key : 40164bf3fc483192b802d901a8f5e6ef-us11
// audience id : d998cdf5af