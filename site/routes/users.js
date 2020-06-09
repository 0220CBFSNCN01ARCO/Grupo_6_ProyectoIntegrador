var express = require("express");
var router = express.Router();
const usercontroller = require("../controllers/userController");
const indexControlller = require("../controllers/indexController");
const adminMiddleware = require("../middleware/adminMiddleware");
const multer = require("multer");
const path = require("path");
const {check, validationResult, body} = require('express-validator');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/avatars/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

/* ruta login*/
router.get("/", function (req, res) {
  res.render("login");
});

/* ruta register */
router.get("/register", usercontroller.register);

/* ruta register por post */
router.post("/register", upload.single('avatar'), [
  check('nombre').isLength(),
  check('apellido').isLength(),
  check('email').isEmail(),
  check('password').isLength({min:8})
] ,usercontroller.store);

/* ruta a admin por get - verifica si es administrador - test para usar middleware */
router.get("/admin", adminMiddleware ,usercontroller.searchAdmin);

/* ruta a listado de usuarios*/ 

router.get("/list", usercontroller.listUsers);

module.exports = router;