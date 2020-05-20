var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I love my wife!');
});

app.get('/start', function(req, res){
    res.send('start page!!');
});

//const port = process.env.PORT || 1337;
const port = 3000;
const host = '127.0.0.1';
server.listen(port, host, function(){
    console.log('Server listen on port!'+ server.address().port);
});
