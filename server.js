/**
 * Created by pallali on 29/6/16.
 */

var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
};

var fs = require('fs');


var routes = require('./server/routes/index');
var schools = require('./server/routes/schools');
var classrooms = require('./server/routes/classrooms');
var activities = require('./server/routes/activities');


//var schooldata = 'server/data/schools.json';
//var classroomdata = 'server/data/classrooms.json';

var us = require('underscore');
var assert = require('assert');
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.use('/', routes);
app.use('/api/schools', schools);
app.use('/api/classrooms', classrooms);
app.use('/api/activities', activities);


app.get('/login',function (req,res) {
    res.render('login')
});

app.get('/home', function (req, res) {
    res.render('layout.html');
});

