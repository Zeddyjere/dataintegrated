require("dotenv").config(); // Require our secret key 
const jwt = require("jsonwebtoken"); 

// Make sure that the user is logged in - Authentication 
exports.loginRequire = function(req, res, next) {
	try {
		let token = req.headers.authorization.split(" ")[1]; 
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if(decoded) {
				return next();
			} else {
				return next({
					status: 401, 
					message: "Please login first"
				})	
			}
		})
	} catch(err) {
		return next({
			status: 401, 
			message: "Please login first"
		})
	}
}

// Make sure that we get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next) {
	try{ 
		let token = req.headers.authorization.split(" ")[1]; 
		jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
			if(decoded && decoded.id === req.params.id) {
				return next();
			} else {
				return next({
					status: 401, 
					message: "Unauthorized"
				})
			}
		})
	} catch(err) {
		return next({
			status: 401, 
			message: "Unauthorized"
		})
	}
 } 
