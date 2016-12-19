'use strict';

var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = 1199;

app.set('views', __dirname + '/views');
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/front/js'));
app.use('/css', express.static(__dirname + '/front/css'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
	res.sendfile('views/index.html');
})

app.post('/bet', function(req, res) {
	console.log(req.body);

	var betResults = {};
	var betResultsString = JSON.stringify(betResults, null, 4);
	// tae = myCalc.calculateTae(req.body.tin, req.body.paymentFrequency);
	res.send({'betResults': betResultsString});
});

app.listen(process.env.PORT || port, function() {
	console.log('server listening on port: ' + port);
});
