var express = require("express");
var router = express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

//multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/product");
  },
  filename: function (req, file, cb) {
    cb(
      null,file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      
    );
  },
});
var upload = multer({ storage: storage });


/* --------------------------------ruta al catalogo total de productos--------------------------------*/
router.get("/", function (req, res, next) {
  res.render("productCatalogInicial");
});

/*--------------------------------ruta a crear producto GET--------------------------------*/
router.get("/create", function (req, res) {
  res.render("productAdd");
});
/*--------------------------------ruta a crear producto por POST*--------------------------------*/
router.post("/create", upload.single('imagen-producto'), productController.create);

/*-------------------------------- ruta a carro de compras-------------------------------- */
router.get("/cart", function (req, res) {
  res.render("productCart");
});

/*-------------------------------- ruta a detalle del producto-------------------------------- */
router.get("/detail", function (req, res) {
  res.render("productDetail");
});

//--------------------------------lista productos en ofertas y destacados que no es el home, sino en productos--------------------------------
router.get("/ofertas", productController.ofertasDestacados);

/*-------------------------------- ruta al detalle de un producto--------------------------------*/
router.get("/:id", productController.detalle);

/*--------------------------------RUTAS PARA BUSCAR PRODUCTO A EDITAR--------------------------------*/
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

/*--------------------------------RUTAS PARA BUSCAR PRODUCTO A ELIMINAR--------------------------------*/

module.exports = router;
