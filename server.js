var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        fs.createReadStream('index.html').pipe(response);
    }
});

server.listen(8080, function () {
    console.log('Im listening on port 8080');
});