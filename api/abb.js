var http = require("http");
http.createServer(function(request, response) {
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://api.live.bilibili.com/AppIndex/home?device=phone&platform=ios&scale=3&build=10000", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			console.log(data)
			response.end(data)
		})
	})
}).listen("5038")
 