var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var PORT = 8000

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})
