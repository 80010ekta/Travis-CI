var express = require('express');
var app = express();
var fs = require("fs");

var user={
	"user5" : {
		"name" : "shraddha patel",
		"profession" : "Dev",
		"id" : 5
	}
}

app.get('/listUsers',function(req,res){
	fs.readFile(__dirname + "/" + "users.json",'utf-8',function(err,data){
	if(err)
	{
		console.log(err);
	}
	console.log(data);
	res.end(data);
});
})

app.get('/addUsers',function(req,res){
	fs.readFile(__dirname + "/" + "users.json",'utf-8',function(err,data){
	if(err)
	{
		console.log(err);
	}else	
	{
	data = JSON.parse(data);
	data["user5"] = user["user5"];
	}
	console.log(data);
	res.end(JSON.stringify(data));
});
})
app.get('/:id',function(req,res){
	fs.readFile(__dirname + "/" + "users.json",'utf8',function(err,data){
	if(err)
	{
		console.log(err);
	}else	
	{
	users= JSON.parse(data);
	var user = users["user" + req.params.id]
	}
	console.log(user);
	res.end(JSON.stringify(user));
});
})
var id = 2;

app.get('/deleteUser', function (req, res) {

   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log( data ); 
       console.log("Read successfully");     
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port
console.log("Example app running at http://%s:%s",host,port)
})



