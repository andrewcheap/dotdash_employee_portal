var express 	= require('express');
var app 		= express();
var morgan 		= require('morgan');
var mongoose 	= require('mongoose');
var bodyParser 	= require('body-parser');
var router 		= express.Router();
var appRoutes 	= require('./app/router/api');
var path		= require('path');
var config		= require('./config');

// Middleware
app.use(morgan('dev')); // Authentication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); // Serves the public directory
app.use('/projectImgs', express.static(__dirname + '/public/projectImgs')); // Create a virtual path to images
app.use('/api', appRoutes); // use appRoutes for server side routing, and append '/api/'

// Connect to mongoose
// mlab credentials
var dbuser 	= config.dbuser;
var dbpass 	= config.dbpass;
var uri 	= 'mongodb://'+dbuser+':'+dbpass+'@ds119750.mlab.com:19750/dotdash';
// var uri	= 'mongodb://localhost/dotdash';

mongoose.connect(uri, function(err){
	if(err){
		console.log('Not connected to the database: ' + err);
	}
	else {
		console.log('Sucessfully connected to MongoDB');
	}
});

// Redirect all requests to index
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
})

// Connect to port
var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on port " + port);
});