var http = require('http');

function serve(req, res) {
    var body = 'Hello World 2';
    res.writeHead(200,
        {
            'Content-Type': 'Text/plain',
            'Content-Length': body.length,
        });

    res.end(body);
}
var server = http.createServer(serve);
server.listen(8000);

console.log('Running Server');