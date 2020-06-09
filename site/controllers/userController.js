const fs = require("fs");
const bcrypt = require("bcrypt");
const { check, validationResult, body } = require("express-validator");

const userController = {
  register: (req, res) => {
    res.render("register");
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
    
    /*------SI EL JSON LEIDO ESTA VACIO LO CREA, SINO LO PARSEA---------*/

    if (leerJSON == "") {
      arrayDeUsuarios = [];
    } else {
      arrayDeUsuarios = JSON.parse(leerJSON);
    }


    for (let i = 0; i < arrayDeUsuarios.length; i++) 
    {
      if (arrayDeUsuarios[i].email == req.body.email){
        
        if(bcrypt.compareSync(req.body.password, arrayDeUsuarios[i].password)){

           usuarioALoguearse = arrayDeUsuarios[i];
          break;
        }
      }
    }

    if(usuarioALoguearse == undefined)
    {
      return res.render('login', {errors:[
        {msg: 'Credenciales inválidas'}
      ]});
    }

    if(req.body.recordame != undefined){
      res.cookie('recordame', usuarioALoguearse.email,{maxAge: 60000})//RECUERDA LA COOKIE POR 1MINUTO
    }

    req.session.usuarioLogueado = usuarioALoguearse;
    
    res.render("userProfile", {usuarioLogueado: req.session.usuarioLogueado});

  },

  store: (req, res) => {
    const body = req.body;

    /* ------------------------------------------VALIDA CAMPOS CON EXPRESS VALIDATOR------------------- */
    let errors = validationResult(req);
    

    if (!errors.isEmpty()) {
      return res.render("register", { errors: errors.errors });
      //return res.send("Error, no se puede guardar el archivo");
    }

    /* ------------------------------------------VALIDA QUE LAS CONTRASEÑAS SEAN IGUALES------------------- */
    if (body.password != body.repassword) {
      return res.send("ERROR LAS PASSWORD NO SON IGUALES");
    }

    const leerJSON = fs.readFileSync("./data/usuarios.json", {
      encoding: "utf-8",
    });

    /*------SI EL JSON LEIDO ESTA VACIO LO CREA, SINO LO PARSEA---------*/

    if (leerJSON == "") {
      arrayDeUsuarios = [];
    } else {
      arrayDeUsuarios = JSON.parse(leerJSON);
    }

    /*----------------------CREA EL OBJETO USUARIO A GUARDAR------------*/

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
    return res.render('userProfile');
  },

  /*
  searchAdmin: (req, res) => {
    return res.send("hola administrador" + req.query.user);
  },

  listUsers: (req, res) => {
    const leerJSON = fs.readFileSync("./data/usuarios.json", {
      encoding: "utf-8",
    });
    if (leerJSON == "") {
      arrayDeUsuarios = [];
    } else {
      arrayDeUsuarios = JSON.parse(leerJSON);
    }

    res.render("userList", arrayDeUsuarios);
  },*/

};


module.exports = userController;
