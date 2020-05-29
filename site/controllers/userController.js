const fs = require("fs");
const bcrypt = require("bcrypt");

const userController = {

    register: (req,res) => {

        const body = req.body;

        if (body.password != body.repassword) {
          
          return res.send("ERROR PASSWORD INCORRECTAS");
        }
        const leerJSON = fs.readFileSync("usuarios.json", { encoding: "utf-8" });

        if (leerJSON == "") {
          arrayDeUsuarios = [];
        } else {
          arrayDeUsuarios = JSON.parse(leerJSON);
        } 
        
        //const ultimoItemDelArray = arrayDeUsuarios[arrayDeUsuarios.length - 1];

        const usuarioAGuardar = {
          //id: ultimoItemDelArray.id +1,
          nombre: body.nombre,
          apellido: body.apellido,
          email: body.email,
          password: bcrypt.hashSync(body.password, 10),
          avatar: req.file.filename,
        };
        
        arrayDeUsuarios.push(usuarioAGuardar);
        fs.writeFileSync("usuarios.json", JSON.stringify(arrayDeUsuarios));
        return res.redirect("/");
    },

    searchAdmin: (req,res)=>{
      return res.send("hola administrador" + req.query.user)
    },

    listUsers: (req,res)=>{
      const leerJSON = fs.readFileSync("usuarios.json", { encoding: "utf-8" });
      if (leerJSON == "") {
        arrayDeUsuarios = [];
      } else {
        arrayDeUsuarios = JSON.parse(leerJSON);
      } 

      res.render("userList", arrayDeUsuarios);
    }
}

module.exports = userController;