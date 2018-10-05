var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    //response.end("Hello World! Debbie was here");

    response.end("Hello World! Debbie was here.  And can I say, what a day it has been!!");

});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
