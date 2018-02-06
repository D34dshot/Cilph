var http = require('http');
var fs = require('fs');

myServer = http.createServer(function(req, res){
	console.log('Request has been made by:', req.url);
	res.writeHead(200, {'Content-Type': "text/html"});
	var mainReadStream = fs.createReadStream(__dirname + '/main.html', 'utf8');
	mainReadStream.pipe(res);
})

console.log('Server is running....');
myServer.listen(7000);