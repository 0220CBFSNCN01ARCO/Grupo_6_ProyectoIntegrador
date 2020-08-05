var express = require("express");
var router = express.Router();
var marcaAPIController = require("../../controllers/api/marcaController");

router.get("/", marcaAPIController.list);
router.get("/:id", marcaAPIController.find);
router.post("/", marcaAPIController.create);
router.delete("/:id", marcaAPIController.destroy);
router.put("/id",marcaAPIController.edit);

module.exports = router;
