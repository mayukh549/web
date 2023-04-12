const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require("@mailchimp/mailchimp_marketing");


// const https = require('https');

const app = express();

mailchimp.setConfig({
  apiKey: "c8c28c177a1bd9225b62e82390fc91b5-us11",
  server: "us11",
});

async function run() {
//   const response = await mailchimp.ping.get();
//   console.log(response);
    const response = await mailchimp.lists.getAllLists();
    console.log(response);
  
}

run();
app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static("storage"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    //console.log(req);

    //res.send("welcome aboard to server 3000");

});
app.post("/",function(req,res){
    var n1 =req.body.FN;
    var n2 =req.body.LN;
    var n3 = req.body.EN;
    //console.log(n1,n2,n3);
    const add = async () => {
    const response = await mailchimp.lists.addListMember("d998cdf5af", {
        email_address: n3,
        status: "subscribed",
        merge_fields: {
            FNAME: n1,
            LNAME: n2,

        },
    });
    console.log(response);
    };
    add();
    
    res.send("Thank you baby");



});
app.listen(3000,function(){
    console.log("hello");
});


// api key : 40164bf3fc483192b802d901a8f5e6ef-us11
// audience id : d998cdf5af