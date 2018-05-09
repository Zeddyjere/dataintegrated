require("dotenv").config();
const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const indexRoutes = require("./routes/index");
const { loginRequire, ensureCorrectUser } = require("./middleware/auth"); 
const db = require("./models")

const PORT = 8081; 
 
app.use(bodyParser.json()); 

// The routes will go here 
app.use("/api/auth/", authRoutes);
app.use(indexRoutes);

// Remove all users


app.use(function(req, res, next) {
	let err = new Error("Not Found"); 
	err.status = 404; 
	next(err); 
})

app.use(errorHandler);

// app listen 
app.listen(PORT, () => {
	console.log(`Server started on Port ${PORT}`)
})

module.exports = app;