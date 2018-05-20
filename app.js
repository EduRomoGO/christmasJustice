'use strict';

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	sentencesDispatcher = require('./services/sentencesDispatcher.js'),
	port = 1199;

app.set('views', __dirname + '/views');
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/static/js'));
app.use('/css', express.static(__dirname + '/static/css'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
	res.sendfile('views/index.html');
})

app.get('/question', function (req, res) {
	res.send(sentencesDispatcher.dispatchSentence());
});

app.listen(process.env.PORT || port, function() {
	console.log('server listening on port: ' + port);
});
