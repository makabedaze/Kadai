var http = require('http');
var fs = require('fs');

//予めファイルを用意する
var indexPage = fs.readFileSync('./index.html', 'utf-8');
var nextPage = fs.readFileSync('./next.html', 'utf-8');

var server = http.createServer(function (req, res) {
    var target = '';
    switch (req.url) {
        case '/':
        case '/index':
            target = indexPage;
            break;
        case '/next':
            target = nextPage;
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plane' });
            res.end('not found');
            return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(target);
    res.end();
});

server.listen(8888);
console.log('サーバーがなんぼのもんじゃい');
