const express = require("express");
const user = require("../routes/user");
const router = express.Router();

router.use("/user", user);

module.exports = router;
