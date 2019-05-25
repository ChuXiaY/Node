const http=require('http');

http.createServer(function(req, res){
	var get ={};
		if(req.url.indexOf('?')!=-1){
			var arr =req.url.split('?');
		//arr[0]=> 地址  '/aaa'
		//arr[1]=> 数据 'user=blue&pass=123456'
		var url =arr[0];
		var arr2=arr[1].split('&');
		for(var i=0;i<arr2.length;i++){
			var arr3=arr2[i].split('=');
			get[arr3[0]]=arr3[1];
			
		}
	}else{
		var url =req.url;
	}
	
	console.log(url,get);
	res.write('aaa');
	res.end();
}).listen(8080);
