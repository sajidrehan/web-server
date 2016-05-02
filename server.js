var express = require('express');
var app = express();
var middleware = require('./middleware.js')
var PORT = 3000;
// app.get('/', function (req, res) {
// 	res.send('yo baby!');


// });



app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!!!');
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function () {
	console.log('server started at port '+ PORT);
});