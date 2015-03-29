var http = require('http');
var fs = require('fs');
var htmlFile;

var server = http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type": "html"});
	htmlFile = fs.createReadStream('./index.html', function (err, file) {
		if (err) {
			throw err;
		};
	});
	htmlFile.pipe(response);
});

server.on('error', function (e) {
  throw e;
});
server.listen(8080);
console.log("The server is listening.");