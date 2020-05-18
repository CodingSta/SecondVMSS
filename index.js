var express = require('express');
var http = require('http');
const app = express();
var server = http.createServer(app);

app.get('/', function(req, res){
    res.send('I love mingyu!');
});

app.get('/start', function(req, res){
    res.send('start page!!');
});

const port = process.env.PORT || 1337;
server.listen(port, function(){
    console.log('Server listen on port!'+ server.address().port);
});
