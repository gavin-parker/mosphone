var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('hello phone');
})

app.listen(3000, function(){
    console.log('server listening on port 3000');
})
