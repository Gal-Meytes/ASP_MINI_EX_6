 const express = require('express')
 const app = express()
 app.use(express.static('public'))
const bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({extended : true}))
 function calc(x,y,operation){
 	switch (operation) {
 	case '0':
 		return x+y
 	case '1':
 		return x-y
 	case '2':
 		return x*y
 	case '3':
 	return x/y
 	default:
 	return 'incalculable'
 	}
 }
 app.post('/calc', function(req,res){
 	var x = parseInt(req.body.x)
 	var y = parseInt(req.body.y)
 	var operation = req.body.operation
 	var result = calc(x,y,operation)
	res.end(`<html>
	 <body>
	 The answer is ${result}.
	 <a href="/index.html">reset</a>
	 </body>
	 </html>`)
 })
 
 app.get('/login', function(req,res) {
	var name = req.query.Name
	var pass = req.query.Password
	console.log("name is" + name);
	console.log("pass is" + pass);
	if (name == "secretName" && pass == "UltimatePassword")
		res.write('<html><body><h1>Secret Login!</h1></body></html>');
    else
	{
		res.statusCode = 404
		res.write('<html><body><h1>Wrong</h1></body></html>');
	}
	res.end();
 })
 app.post('/login', function(req,res) {
	var name = req.body.Name
	var pass = req.body.Password
	console.log("name is " + name);
	console.log("pass is " + pass);
	if (name == "secretName" && pass == "UltimatePassword")
		res.write('<html><body><h1>Secret Login!</h1></body></html>');
    else
	{
		res.statusCode = 404
		res.write('<html><body><h1>Wrong</h1></body></html>');
	}
	res.end();
 })
 app.listen(1234)
