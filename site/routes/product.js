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
      null,file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      
    );
  },
});
var upload = multer({ storage: storage });


/* --------------------------------ruta al catalogo total de productos--------------------------------*/





/*-------metodos de sql ----*/
router.get("/", productController.catalagoCompleto);
router.get("/create", productController.crear_get)
router.post("/create", upload.single('imagen-producto'), productController.crear_post);
router.get("/list",productController.listadoProductos);
router.get("/edit/:id", productController.editar_get);
router.put("/edit/:id", productController.editar_post);
router.delete("/edit/:id", productController.borrar);
router.get("/detail/:id", productController.detail_get);




/*-------------------------------- ruta a carro de compras-------------------------------- */
router.get("/cart",  function (req, res) {
  res.render("productCart", {usuario: req.session.usuarioLogueado});
});

/*-------------------------------- ruta a detalle del producto-------------------------------- */
//router.get("/detail", function (req, res) {
//res.render("productDetail");
//});

//--------------------------------lista productos en ofertas y destacados que no es el home, sino en productos-------------
//router.get("/ofertas", productController.catalagoOfertas);

/*-------------------------------- ruta al detalle de un producto--------------------------------*/
//router.get("/:id", productController.detalle);

/*--------------------------------RUTAS PARA BUSCAR PRODUCTO A EDITAR--------------------------------*/
//router.get("/edit/:id", productController.edit);
//router.put("/edit/:id", productController.update);

/*--------------------------------RUTAS PARA BUSCAR PRODUCTO A ELIMINAR--------------------------------*/
//router.delete("/edit/:id", productController.delete);

module.exports = router;
