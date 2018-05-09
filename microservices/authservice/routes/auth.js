const express = require("express"); 
const router = express.Router(); 
const { signup, signin } = require("../handlers/auth"); 

// Two public API endpoints
router.post("/signin", signin);

router.post("/signup", signup);

module.exports = router;
