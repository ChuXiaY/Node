const express =require('express');
const static =require('express-static');
const cookieParser =require('cookie-parser');
const cookieSession =require('cookie-session');
const bodyPerser =require('body-parser');
const ejs =require('ejs');
const jade =require('jade');
const consolidate =require('consolidate');

var server = express();
server.listen(8080);
//解析cookie
server.use(cookieParser('sdf2dfghjk12dfg22ghj123kl12'));

//使用session
var arr=[];
for(var i=0;i<1000000;i++){
	arr.push('keeys_'+Math.random());
}
server.use(cookieSession({name:'zns_sess_id',keys:arr,maxAge:20*3600*1000}));
//post数据
server.use(bodyPerser.urlencoded({extended:false}));

//用户请求
// server.use("/",function(req,res,next){
// 	console.log(req.query,req.body,req.cookies,req.session)
// });

//配置模板引擎
	// 输出什么东西
	server.set('view engine','html');
	//模板文件放在哪
	server.set('views','./views');
	//哪种模板引擎
	server.engine('html',consolidate.ejs);
	//接收用户请求
	server.get('/index',function (req,res) {
		res.render('1.ejs',{name:'blue'});
	});
//static数据
server.use(static('./www'));

/*模板引擎 :适配
consolidate引入

server.set('view engine','html');
server.set('views','模板文件目录');
server.engine('html',consolidate.ejs);
server.get('/',function (req,res) {
	res.render('模板文件',数据);
})*/


