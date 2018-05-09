const express = require("express"); 
const router = express.Router(); 
const { loginRequire } = require("../middleware/auth"); 

// Two protected API endpoints
router.get("/home", loginRequire, (req, res) => {
	res.json({ message: "You made it to the home route: You are authenticated" })
})

router.get("/profile", loginRequire, (req, res) => {
	res.json({ message: "You made it to the profile route: You are authenticated" })
})

module.exports = router;