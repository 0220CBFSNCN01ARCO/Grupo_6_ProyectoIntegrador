var express = require("express");
var router = express.Router();
var userAPIController = require("../../controllers/api/userController");

router.get("/", userAPIController.list);
router.get("/:id", userAPIController.find);
router.post("/", userAPIController.create);
router.delete("/:id", userAPIController.destroy);
router.put("/id", userAPIController.edit);

module.exports = router;
