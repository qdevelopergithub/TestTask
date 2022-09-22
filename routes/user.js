const express = require("express");
const Controllers = require("../controllers/index");

const router = express.Router();

router.get("/getAllUsers", Controllers.user.getAllUsers);
router.get("/getUserByCityName", Controllers.user.getUserByCityName);
router.post("/createUser", Controllers.user.createUser);
router.post("/createFakeUser", Controllers.user.createFakeUser);
router.put("/updateUser", Controllers.user.updateUser);
router.get("/getUsersById", Controllers.user.getUsersById);

module.exports = router;
