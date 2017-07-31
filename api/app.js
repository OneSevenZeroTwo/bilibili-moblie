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
app.get('/ss',function(req,res){
	res.append("Access-Control-Allow-Origin", "*");
	res.send('请求成功')
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


//存入收藏--------------------------
app.post('/collect', function(req, res) {
	createConnection();
	connection.connect();
	var msgId = req.body.msgId;
	var username = req.body.username;
	console.log(msgId,username,688888888)
	connection.query(`select msgId from usermsg where username = '${username}';`, function(error, results, fields){
		if(error) throw error;
		console.log(results[0].msgId);
		var str = results[0].msgId;
		console.log(str);
		// if(str.length>=1){
		if(str){
			str += ','+msgId;
		}else{
			str = msgId;
		}		
		console.log(str);
		connection.query(`update usermsg set msgId = '${str}' where username = '${username}';`,function(error, results, fields){
			if(error) throw error;
			res.send('收藏成功');
		})
	})
	res.append("Access-Control-Allow-Origin", "*")
})


// 显示收藏页---------------------------
app.post('/collectlist', function(req, res) {
	createConnection();
	connection.connect();
	var username = req.body.uname;
	console.log(username,'------------')
	connection.query(`select msgId from usermsg where username = '${username}';`, function(error, results, fields){
		if(error) throw error;
		console.log(results[0].msgId,'ididididididd');
		if(!results[0].msgId){
			res.send('nonono');		
		}else{			
			/*var arr = results[0].msgId.split(',');
			// 去重
			for(var i=0;i<arr.length;i++){
				for(var j=i+1;j<arr.length;j++){
					if(arr[i] == arr[j]){
						arr.splice(j--,1)
					}
				}
			}*/
			var str = '('+results[0].msgId+')';
			// select * from usermsg where id in (1,2,5,7,9);若有重复会自动剔除不会显示两次
			
			/*connection.query(`select * from usermsg where id in ${str};`,function(error, results, fields){
				if(error) throw error;
				res.send(results);
			});*/
			res.send(results[0]);
		}
	})
	res.append("Access-Control-Allow-Origin", "*")	
})


// 监听----------------------------------------------
var server = app.listen(666, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


// 上传文件----------------------------------------------------
var multer = require('multer');
var imgurl;
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹不会自动创建。
	destination: function(req, file, cb) {
		cb(null, '../public/uploads');
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		imgurl =  file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
		cb(null, imgurl);
	}
});
var upload = multer({
	storage: storage
});
app.post('/upload-single', upload.any(), function(req, res, next) {	
	res.append("Access-Control-Allow-Origin","*");
	res.send(imgurl);
});

// 头像写入数据库--------------------
app.post('/upload-touxiang',function(req,res){
	createConnection();
	connection.connect();
	var username = req.body.uname;
	console.log(username)
	connection.query(`update usermsg set imgurl = '${imgurl}' where username = '${username}';`, function(error, results, fields){
		if(error) throw error;
		res.send('ok666');
	})
	res.append("Access-Control-Allow-Origin", "*")
})

app.post('/touxiang',function(req,res){
	createConnection();
	connection.connect();
	var username = req.body.uname;
	connection.query(`select * from usermsg where username = '${username}';`, function(error, results, fields){
		if(error) throw error;
		// console.log(results[0].imgurl)
		res.send(results[0].imgurl);
	})
	res.append("Access-Control-Allow-Origin", "*")
})