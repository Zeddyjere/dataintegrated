const db = require("../models");
const jwt = require("jsonwebtoken"); 

exports.signin = async function(req, res, next) {
	try {
		// find user
		// Compare user password 
		// Sign using jwt.sign 
		let user = await db.User.findOne({
			username: req.body.username
		})
		let { id, username } = user; 
		console.log(req.body.password);
		let isMatch = await user.comparePassword(req.body.password); 
		if(isMatch) {
			// create and sign token here 
			let token = jwt.sign({
				id,
				username, 
			}, process.env.SECRET_KEY); 
			return res.status(200).json({
				id,
				username, 
				token
			})
		} else {
			return next({ status: 400, message: "Invalid username/password" })
		}

	} catch(e) {
		return next({ status: 400, message: "Invalid username/password" })
	}
}; 

exports.signup = async function(req, res, next) {
	try{
		// Create a user 
		// Create a token 
		let user = await db.User.create(req.body); 
		let { id, username } = user; 

		let token = jwt.sign({
			id, 
			username, 
		}, process.env.SECRET_KEY); 
		return res.status(200).json({
			id, 
			username,  
			token
		})
		
	} catch(err) {
		// if the validation fails 
		if(err.code === 11000) {
			err.message = "Sorry, that username and/or email is taken"
		}
		return next({
			status: 400, 
			message: err.message
		})
	}
}