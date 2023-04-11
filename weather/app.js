const express = require('express');
const https = require('https');

const app = express();
app.get("/",function(req,res){
    //console.log(req);
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=8583664aacaeac3dae8e866593ca2836&units=metric';
    https.get(url,function(respond){
        console.log(respond.statusCode);
        respond.on('data',function(data){
            //console.log(data); ----> hexa decimal 
            const weatherdata = JSON.parse(data);
            const temp = weatherdata.main.temp;
            const desi= weatherdata.weather[0].description;
            const image_id = weatherdata.weather[0].icon
            const url_img =' https://openweathermap.org/img/wn/'+image_id+'@2x.png'
            res.write("<p>the weather is like "+desi+"<p>");
            res.write("<h1>the temperature is "+temp+"C</h1>");
            res.write('<image src='+url_img+'>');
            res.send();
            //console.log(desi);
            //JSON.stringify(class)------>convert class to a array

            //console.log(weatherdata);
        })

    })
    //res.send("welcome aboard to server 3000");

});
app.listen(3000,function(){
    console.log("hello");
});