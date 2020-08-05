var express = require("express");
var router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");
const authMiddleware = require("../middleware/authMiddleware");

//multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/product");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

/*-------metodos de sql ----*/
router.get("/", productController.catalagoCompleto);
router.get("/create", productController.crear_get);
router.post(
  "/create",
  upload.single("imagen-producto"),
  productController.crear_post
);
router.get("/list", productController.listadoProductos);
router.get("/edit/:id", productController.editar_get);
router.put("/edit/:id", productController.editar_post);
router.delete("/edit/:id", productController.borrar);
router.get("/detail/:id", productController.detail_get);
router.get("/ofertas", productController.catalagoOferta);

/*-------------------------------- ruta a carro de compras-------------------------------- */
router.get("/cart", function (req, res) {
  res.render("productCart", { usuario: req.session.usuarioLogueado });
});

router.get("/checkout", function (req, res) {
  res.render("checkOutForm");
});

module.exports = router;
