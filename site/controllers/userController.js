const fs = require("fs");
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
    db.Usuario.findOne(
      {
        where: {
          email: req.body.email,
        },
      }
      
    ).then((usuario) => {
      let errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.render("login", { errors: errors.errors });
      }

      if (!usuario) {
        return res.render("login", { errors: errors.errors });
      }

      if (!bcrypt.compareSync(req.body.password, usuario.password)) {
        return res.render("login", { errors: errors.errors });
      }
      console.log(usuario)
      if(req.body.recordame != undefined) {
        res.cookie("recordame", usuario.email, { maxAge: 90000 }); //RECUERDA LA COOKIE POR 1MINUTO
      }

      req.session.usuarioLogueado = usuario;
      console.log("q hay en sesion")
      console.log(req.session.usuarioLogueado);

      if ((usuario =! null && usuario.idTipoUsuario == "2")) {
        res.redirect('/user/admin');
      } else {
        res.redirect('/product');
      }
    });
  },

  guardarUsuario: (req, res) => {
    db.Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename,
      idTipoUsuario: "1",
    });
    res.redirect("/user/profile", { usuario: req.session.usuarioLogueado });
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
    res.redirect("/user/list", { usuario });
  },

  borrar: (req, res) => {
    db.Usuario.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/user/list");
  },

  userProfile: (req,res)=>{
    let usuarioActivo = req.session.usuarioLogueado
    console.log(usuarioActivo);
    db.Usuario.findOne({
      where: {
        email: usuarioActivo.email,
      },
    }).then((usuario) => {
      res.render("userProfile", {
        usuario
        
      });
    });
  }



  
  /*
  loginUsuario: (req, res) => {
    if (usuario === undefined) {
      res.JSON({ error: "mail o pass incorrecta" });
    }
  },
  
 

  processLogin: (req, res) => {
    let errors = validationResult(req);
    let usuarioALoguearse;

    if (!errors.isEmpty()) {
      return res.render("login", { errors: errors.errors });
    }

    const leerJSON = fs.readFileSync("./data/usuarios.json", {
      encoding: "utf-8",
    });

    /*------SI EL JSON LEIDO ESTA VACIO LO CREA, SINO LO PARSEA---------

    if (leerJSON == "") {
      arrayDeUsuarios = [];
    } else {
      arrayDeUsuarios = JSON.parse(leerJSON);
    }

    for (let i = 0; i < arrayDeUsuarios.length; i++) {
      if (arrayDeUsuarios[i].email == req.body.email) {
        if (
          bcrypt.compareSync(req.body.password, arrayDeUsuarios[i].password)
        ) {
          usuarioALoguearse = arrayDeUsuarios[i];
          break;
        }
      }
    }

    if (usuarioALoguearse == undefined) {
      return res.render("login", {
        errors: [{ msg: "Credenciales inválidas" }],
      });
    }

    if (req.body.recordame != undefined) {
      res.cookie("recordame", usuarioALoguearse.email, { maxAge: 60000 }); //RECUERDA LA COOKIE POR 1MINUTO
    }

    req.session.usuarioLogueado = usuarioALoguearse;

    res.render("userProfile", { usuarioLogueado: req.session.usuarioLogueado });
  },

  store: (req, res) => {
    const body = req.body;

    /* ------------------------------------------VALIDA CAMPOS CON EXPRESS VALIDATOR------------------- 
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.errors });
      //return res.send("Error, no se puede guardar el archivo");
    }

    /* ------------------------------------------VALIDA QUE LAS CONTRASEÑAS SEAN IGUALES------------------- 
    if (body.password != body.repassword) {
      return res.send("ERROR LAS PASSWORD NO SON IGUALES");
    }

    const leerJSON = fs.readFileSync("./data/usuarios.json", {
      encoding: "utf-8",
    });

    /*------SI EL JSON LEIDO ESTA VACIO LO CREA, SINO LO PARSEA---------

    if (leerJSON == "") {
      arrayDeUsuarios = [];
    } else {
      arrayDeUsuarios = JSON.parse(leerJSON);
    }

    /*----------------------CREA EL OBJETO USUARIO A GUARDAR------------

    const cantidadUsuarios = arrayDeUsuarios.length;
    const nuevoID = cantidadUsuarios + 1;

    const usuarioAGuardar = {
      id: nuevoID,
      nombre: body.nombre,
      apellido: body.apellido,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      avatar: req.file.filename,
    };
    console.log(usuarioAGuardar);
    arrayDeUsuarios.push(usuarioAGuardar);
    fs.writeFileSync("./data/usuarios.json", JSON.stringify(arrayDeUsuarios));
    return res.render("userProfile");
  },

  /*
  searchAdmin: (req, res) => {
    return res.send("hola administrador" + req.query.user);
  },
*/
};


module.exports = userController;
