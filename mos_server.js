var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('hello phone');
})

app.get('/status', function(req, res){
    res.setHeader('content-type', 'text/plain');
    var date = new Date();
    var current_hour = date.getHours();

    var status = "on";
    if(current_hour <= 7 || current_hour >= 11){
        status = "off";
    }
    res.send(status);
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
})
