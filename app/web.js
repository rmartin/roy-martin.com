var express = require('express');
var http = require('http');
var strava = require('strava-v3');

var app = express();
app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

//get list of activities from Strava API based on the Access token in ENV
app.get('/strava/listActivities', function(req, res){
    strava.athlete.listActivities({'access_token':process.env.STRAVA_ACCESS_TOKEN},function(args,results) {
        res.send(results);
    });
});

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
