const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");
var crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userController = {
  registrar: (req, res) => {
    res.render("register", { usuario: req.session.usuarioLogueado });
  },

  login_post: (req, res) => {
    db.Usuario.findOne({
      where: {
        email: req.body.email,
      },
    }).then((usuario) => {
      let errors = validationResult(req);
      console.log(errors);

      if (!errors.isEmpty()) {
        console.log("campos vacios");
        return res.render("login", { errors: "campos vacios", usuario });
      }

      if (
        !usuario ||
        !bcrypt.compareSync(req.body.password, usuario.password)
      ) {
        console.log("no exisite usuario");
        return res.render("login", {
          errors: "email o contraseña incorrecta",
          usuario: "",
        });
      }

      if (req.body.recordame != undefined) {
        res.cookie("recordame", usuario.email, { maxAge: 900000 }); //RECUERDA LA COOKIE POR 1MINUTO
      }

      req.session.usuarioLogueado = usuario;
      console.log("q hay en sesion");
      console.log(req.session.usuarioLogueado);

      if ((usuario = !null && usuario.idTipoUsuario == "2")) {
        res.redirect("/user/admin");
      } else {
        res.redirect("/product");
      }
    });
  },

  guardarUsuario: (req, res) => {
    let errors = validationResult(req);

    if (req.body.password != req.body.repassword) {
      return res.render("register", {
        errors: "contraseñas no son iguales",
        usuario: " ",
      });
    }
    console.log("guardadndo usuario");
    db.Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename,
      idTipoUsuario: "1",
    });
    res.redirect("/product");
    //return res.redirect("/user/profile", { usuario });
    //return res.render("index", { usuario: req.session.usuarioLogueado,});
  },

  listUsers: (req, res) => {
    db.Usuario.findAll({ include: [{ association: "tipoUsuario" }] }).then(
      function (usuarios) {
        return res.render("userList", {
          usuarios,
          usuario: req.session.usuarioLogueado,
        });
      }
    );
  },

  editUser: (req, res) =>
    db.Usuario.findByPk(req.params.id, {
      include: [{ association: "tipoUsuario" }],
    }).then((usuario) => {
      res.render("userEdit", { usuario });
    }),

  editar_post: (req, res) => {
    db.Usuario.update(
      {
        idTipoUsuario: req.body.tipoUsuario,
        direccion: req.body.direccion,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    //res.send("usuario modificado")
    return res.redirect("/user/list", { usuario });
  },

  borrar: (req, res) => {
    db.Usuario.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/user/list", { usuario });
  },

  userProfile: (req, res) => {
    let usuarioActivo = req.session.usuarioLogueado;
    console.log(usuarioActivo);
    db.Usuario.findOne({
      where: {
        email: usuarioActivo.email,
      },
    }).then((usuario) => {
      res.render("userProfile2", {
        usuario,
      });
    });
  },
};

module.exports = userController;
