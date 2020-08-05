var express = require("express");
var router = express.Router();
var productAPIController = require("../../controllers/api/productController");

router.get("/", productAPIController.list);
router.get("/:id", productAPIController.find);
router.post("/", productAPIController.create);


module.exports = router;

