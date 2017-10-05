var User 	= require('../../models/user');
var jwt 	= require('jsonwebtoken');
var config 	= require('../../../config');

var userSecret = config.userSecret;

// Register
module.exports.registerRoute = 
	(req , res , next) => {
		var user = new User();
		user.username 	= req.body.username;
		user.password	= req.body.password;
		user.email		= req.body.email;
		user.save(function(err) {
			if( req.body.username == null || req.body.username == ''
				|| req.body.password == null || req.body.password == ''
				|| req.body.email == null || req.body.email == '') {
				res.json({success: false, message: "Username ,email or password not provided."});
			}
			else {
				if(err) {
					res.json({success: false, message: "Username or email already exists."});
				}
				else {
					res.json({success: true, message: "User created!"});
				}
			}
		});
	};

// Register
module.exports.loginRoute = 
	(req , res , next) => {
		User.findOne({ username: req.body.username }).select('email username password').exec(function(err, user){
			if(err) throw err;

			if(!user) {
				res.json({ success: false, message: 'Could not authenticate user' });
			} 
			else if (user) {
				if(req.body.password) {
					var validPassword = user.comparePassword(req.body.password);
				}
				else {
					res.json({ success: false, message: 'No password provided'});
				}

				if(!validPassword) {
					res.json({ success: false, message: 'Could not authenticate password'});
				}
				else {
					var token = jwt.sign({ username: user.username, email: user.email }, userSecret, { expiresIn: '12h' });
					res.json({ success: true, message: 'User authenticated', token: token });
				}
			}
		})
	};


// Get token
module.exports.getToken = 
	(req, res, next) => {
		var token = req.body.token || req.body.query || req.headers['x-access-token'];

		if(token) {
			jwt.verify(token, userSecret, function(err, decoded) {
				if(err) {
					res.json({ success: false, message: 'Token Invalid' });
				}
				else {
					req.decoded = decoded;
					next();
				}
			});
		}
		else {
			res.json({ success: false, message: 'No token provided' });
		}
	};

// Get user data if token available
module.exports.getUser = 
	(req, res, next) => {
		res.send(req.decoded);
	};
