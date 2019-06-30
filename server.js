var http = require('http');
const qs = require('querystring');
var arDrone = require('ar-drone');
var custom = require("./js/custom");
var client = arDrone.createClient();
client.config('general:navdata_demo', 'FALSE');

var navdata;
client.on("navdata", function (data) {
    navdata = data;
})

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    var body = ""
    var data;
    if (req.method == "POST") {
        req.on("data", function (data) {
            body += data;
        })
        req.on("end", function () {
            res.writeHead(200);
            data = JSON.parse(Object.keys(qs.parse(body))[0])
            console.log(data)
            var comm = data.comm
            var params = data.params
            var useCust = data.custom
            if (useCust) {
                params = [client, navdata].concat(params)
                custom[comm](...params)
            }
            else client[comm](...params)
            res.end()
        })
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080);