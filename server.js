var express = require('express');
var app = express();

//global variables
var company = "Rest Inc.";

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the routes
app.get('/', function(req, res) {
	var beds = [
		{ name: 'King', comfort: 10 },
		{ name: 'Queen', comfort: 8 },
		{ name: 'Double', comfort: 6 },
		{ name: 'Twin XL', comfort: 5 },
		{ name: 'Twin', comfort: 4 }
	];
	var tagline = "You'll sleep the best with Rest!"
	// ejs render automatically looks in the views folder
	res.render('pages/index', {
		company: company,
		beds: beds,
		tagline: tagline
	});
});
app.get('/about', function(req, res) {
	res.render('pages/about', {
		company: company
	});
});
app.get('/contact', function(req, res) {
	res.render('pages/contact', {
		company: company
	});
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// set a few other page routes to test

