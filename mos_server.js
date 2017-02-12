var express = require('express');
var app = express();

var schedule = {startPhoneAt : 7, stopPhoneAt : 23};


app.get('/', function(req, res){
res.send('hello phone');
})

app.get('/status', function(req, res){
    res.setHeader('content-type', 'text/plain');
    var date = new Date();
    var current_hour = date.getHours();

    var status = "on";
    if(current_hour <= schedule.startPhoneAt || current_hour >= schedule.stopPhoneAt){
        status = "off";
    }
    res.send(status);
})

app.get('/schedule', function(req, res){
    res.setHeader('content-type', 'application/json');
    res.send(schedule);
})

app.put('/schedule', function(req, res){
    var newSchedule = req.body;
    if(newSchedule.startPhoneAt !== null && newSchedule.stopPhoneAt !== null){
        schedule = newSchedule;
        res.sendStatus(201);
    }else{
        res.status(400).send("Please use the format {startPhoneAt : int, stopPhoneAt : int}");
    }
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
})
