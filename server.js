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

var us = require('underscore');
var assert = require('assert');
var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.use('/', routes);


 //Session check each routes
 var sessionCheck = function (req, res, next) {
    var sessionObj = req.cookies['session_obj'];
    if (sessionObj) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.get('/login',function (req,res) {
    res.render('login')
});

app.get('/home', function (req, res) {
    res.render('layout.html');
});

app.get('/wash', sessionCheck, function (req, res) {
    res.render('templates/washing.html');
});

