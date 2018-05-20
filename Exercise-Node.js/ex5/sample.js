var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var indesPage = fs.readFileSync('./index.html', 'utf-8');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var urlParse = url.parse(req.url, true);
        console.log('--GET Request--');
        console.log('nameは' + urlParse.query.name);
        console.log('ageは' + urlParse.query.age);
    } else {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var params = qs.parse(body);
            console.log('--POST Request--');
            console.log('nameは' + params.name);
            console.log('ageは' + params.age);
        });
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(indesPage);
    res.end();
});

server.listen(8888);
console.log('サーバーを起動しました');