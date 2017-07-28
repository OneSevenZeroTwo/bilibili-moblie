var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var connection;

// 数据库连接----------------------------------
function createConnection(){
	connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'bilibili'
	})
}

app.use(bodyParser.urlencoded({extended:false}));
// 设置静态文件 app.js根目录下寻找public文件夹作为静态文件夹
app.use(express.static('public'));

// 注册---------------------------------------
app.post('/register',function(req,res){
	createConnection();
	connection.connect();
	// console.log(req.body.id);
	var username = req.body.uname;
	var password = req.body.password;
	console.log(username,password);
	connection.query('SELECT * FROM usermsg where username =  "'+username+'"', function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log(results);
		if(results.length>=1){
			res.send('no');
			console.log('no');
		}else{
			connection.query("insert into usermsg(username,password) values('"+username+"','"+password+"');",function(){});
			res.send('ok');
			console.log('yes');

		}
		connection.end();
	});
	res.append("Access-Control-Allow-Origin", "*")
})

app.post('/test',function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.body);
	console.log(req.body.uname,req.body.password)
	// console.log(req.query.uname,req.query.password);//get
	res.send('yes666');
})
// 登录-----------------------------------------
app.post('/login',function(req,res){
	createConnection();
	connection.connect();
	console.log(req.body);
	var username = req.body.uname;
	var password = req.body.password;
	console.log(username,password);
	connection.query('SELECT * FROM usermsg where username =  "'+username+'"', function(error, results, fields) {
		if(error) throw error;
		//results =>array类型
		console.log(results);
		if(results.length<1){
			res.send('usernameno');
		}else if(results[0].password != password){
			res.send('passwordno');
		}else{
			res.send('yes');
		}
		connection.end();
	});
	res.append("Access-Control-Allow-Origin", "*")
})

// 监听----------------------------------------------
var server = app.listen(666, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})