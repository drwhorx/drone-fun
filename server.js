var fs = require("fs")
var arDrone = require('ar-drone');
var custom = require("./js/custom");
var client = arDrone.createClient();
client.config('video:video_channel', 0);
client.config('general:navdata_demo', 'FALSE');

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var navdata;
client.on('navdata', data => navdata = data);
app.use(express.static('./'))
app.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    res.sendFile(__dirname + '/manual.html');
});
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('comm', function (data) {
        console.log(data)
        var params = data.params;
        client[data.comm](...params)
    });
    socket.on('custom', function (data) {
        console.log(data)
        var params = [client, navdata].concat(data.params);
        custom[data.comm](...params);
    })
});
server.listen(8080);