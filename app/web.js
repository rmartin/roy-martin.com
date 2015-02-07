var newrelic = require('newrelic');
var express = require('express');
var http = require('http');

var app = express();
app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
