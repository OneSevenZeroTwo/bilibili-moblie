var express = require('express');
var app = express();
var mysql = require('mysql');

var connection;

function createConnection(){
	connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'test'
	});
	return connection;
}

app.get('/',function(req,res){

	createConnection();
	connection.connect();
	connection.query('SELECT * FROM bbindex',function(error,results,fields){
		if(error) throw error;
		// console.log(results)
		res.send(results)
		// connection.end();
	});
	res.append("Access-Control-Allow-Origin","*");
});

//详情
app.get('/detail',function(req,res){

	var aid = req.query.aid

	createConnection();
	connection.connect();
	connection.query(`SELECT * FROM bbindex WHERE aid='${aid}'`,function(error,results,fields){
		if(error) throw error;
		// console.log(results);
		res.send(results);
		// connection.end();
	});
	res.append("Access-Control-Allow-Origin","*");
});

//随机
function randomNum(min,max){
	var num = parseInt(Math.random()*(Math.abs(max-min)+1))+min;
	 return num;
}
//评论
app.get('/review',function(req,res){

	createConnection();
	connection.connect();
	connection.query(`SELECT * FROM reviews`,function(error,results,fields){
		if(error) throw error;
		// console.log(randomNum(0,14))
		var v = [];
		for(var i=0;i<5;i++){
			v.push(results[randomNum(0,results.length-1)]);
		}

		// console.log(v);

		res.send(v);
		connection.end();
	});

	res.append("Access-Control-Allow-Origin","*");
});

app.get('/search',function(req,res){

	var target = req.query.target;
	var page = req.query.page;
	console.log('con:'+target+',page:'+page)

	createConnection();
	connection.connect();
	connection.query(`SELECT title,aid,tname,owner FROM bbindex`,function(error,results,fields){
		if(error) throw error;
		results = results.filter(function(item){
			if (item.title.indexOf(target)>0) {
				return item;
			}
		});
		results = results.filter(function(item,idx){
			return idx<(10*page);
		})

		// console.log(results);
		res.send(results);
		// connection.end();
	});

	res.append("Access-Control-Allow-Origin","*");
});


var server = app.listen(12345,function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log(`端口${port}服务器开启`);
})