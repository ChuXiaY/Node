const express =require('express');
const bodyParser =require('body-parser');
const multer =require ('multer');
const fs =require('fs');
const pathLib =require('path');
var objMulter =multer({dest:'../www/upload/'});
var server = express();

//错误 不能在后台查看
//server.use(bodyParser.urlencoded({extended:false}));
server.use(objMulter.any());

server.post('/',function(req,res){
	console.log(req.files[0].originalname);
	var newName =req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
	fs.rename(req.files[0].path,newName,function (err) {
		if(err)
		res.send('上传失败');
		else
		res.send("成功！");
	});
});
server.listen(8080);
//body-parser 解析post数据 appliction/x-www--form-urlencoded
//server.use(bodyParser.urlencode());

//multer 解析post文件  multer/form-data
//var obj=multer({dest: 'upload/'});
//server.use(obj.any());
//server.use(obj.single('f1')); //指定特定的name

//扩展名
//pathLib.parse(req.files[0].originalname).ext;

//req.files[0].originalname+pathLib.parse(req.files[0].originalname).ext;

