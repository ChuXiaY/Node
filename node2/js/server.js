const http=require('http');
const querystring = require('querystring');
http.createServer(function(req, res){
	var get ={};
		if(req.url.indexOf('?')!=-1){
		var arr =req.url.split('?');
		var url =arr[0];
		get=querystring.parse(arr[1]);
	}else{
		var url =req.url;
	}
	
	console.log(url,get);
	res.write('aaa');
	res.end();
}).listen(8080);
