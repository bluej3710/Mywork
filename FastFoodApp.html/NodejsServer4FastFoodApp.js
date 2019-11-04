//Server
var createServer

var http = require('http');



// An example of a web server written with Node which responds with 'If you see this my server is working! lol ;)'.

// To run the server, put the code into a file called example.js or NodejsServer4FastFoodApp.js and execute it with the node program.

http.createServer(function (request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('If you see this my server is working! lol ;)\n');

}).listen(8080);



//console.log('Server running at http://127.0.0.1:8124/');
console.log('Server running at http://swapi.co/documentation#root');