var express = require("express");
var router = express.Router();
const usercontroller = require("../controllers/userController");
const indexControlller = require("../controllers/indexController");
const adminMiddleware = require("../middleware/adminMiddleware");
const multer = require("multer");
const path = require("path");
const { check, validationResult, body } = require("express-validator");
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

/*-------------------------MULTER PARA CARGAR IMAGENES AL PERFIL DEL USUARIO-----------------------------*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

/*-------------------------LOGIN DEL USUARIO ---- MUESTRA EMAIL Y PASSWORD-----------------------------*/
router.get("/",guestMiddleware ,function (req, res) {
  res.render("login");
});

/*-------------------------LOGIN DEL USUARIO ----METODO POST ---- PROCESO DE LOGIN -----------------------------*/
router.post("/",usercontroller.processLogin);


/*-------------------------REGISTRAR NUEVO USUARIO ----METODO GET -----------------------------*/
router.get("/register",guestMiddleware ,usercontroller.register);


/*-------------------------REGISTRAR NUEVO USUARIO ----METODO POST---EXPRESS-VALIDATOR -----------------------------*/
router.post(  "/register",
  upload.single("avatar"),
  [
    check("nombre").isLength({ min: 1 }).withMessage("El campo nombre no puede estar vacío"),
    check("apellido").isLength({ min: 1 }).withMessage("El campo apellido no puede estar vacío"),
    check("email").isEmail().withMessage("Debe ser un email válido"),
    check("password").isLength({ min: 8 }).withMessage("Password debe tener minimo 8 caracteres"),
  ],
  usercontroller.store
);

/*-------------------------VER PERFIL DE USUARIO ----METODO GET--------------------------------*/
router.get("/profile", authMiddleware, function (req, res) {
  
  res.render("userProfile", { usuarioLogueado: req.session.usuarioLogueado });
});

/*-------------------------SIRVE PARA CONTROL DE SABER SI EL USUARIO ESTA LOGUEADO ----METODO GET--------------------------------*/
router.get("/check", function (req, res) {
  if(req.session.usuarioLogueado == undefined){
    res.send("EL USUARIO NO ESTA LOGUEADO")
  }
  res.send("EL USUARIO LOGUEADO ES: " + req.session.usuarioLogueado.email);
});

/*-------------------------CERRAR SESION DEL USUARIO ----METODO GET--------------------------------*/
router.get("/logout", function (req, res) {
  req.session.destroy();
  return res.send("LA SESIÓN DEL USUARIO A TERMINADO")
});

/* ruta a admin por get - verifica si es administrador - test para usar middleware */
//router.get("/admin", adminMiddleware, usercontroller.searchAdmin);

/* ruta a listado de usuarios*/
//router.get("/list", usercontroller.listUsers);

module.exports = router;
