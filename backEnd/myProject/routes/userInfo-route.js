const express = require("express");
const router = express.Router();
const userController = require("../controller/userInfo-controller");

router.post("/userInformation/create/", userController.createUser);
router.get("/userInformation/read/", userController.readUser);
router.get("/userInformation/readByUserId/:id", userController.readByUserId);
router.put("/userInformation/updateByUserId/:id", userController.updateByUserId);
router.delete("/userInformation/deleteByUserId/:id", userController.deleteByUserId);

module.exports = router;
