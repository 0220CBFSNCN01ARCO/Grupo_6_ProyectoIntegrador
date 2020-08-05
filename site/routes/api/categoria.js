var express = require("express");
var router = express.Router();
var categoriaAPIController = require("../../controllers/api/categoriaController");

router.get("/", categoriaAPIController.list);
router.get("/:id", categoriaAPIController.find);
router.post("/", categoriaAPIController.create);
router.delete("/:id", categoriaAPIController.destroy);
router.put("/:id", categoriaAPIController.edit);

module.exports = router;
