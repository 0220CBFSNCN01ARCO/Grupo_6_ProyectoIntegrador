//middleware a nivel de aplicacion PARA RECORDAR USUARIO POR 1 MINUTO
const db = require("../database/models");

function recordameMiddleware (req,res,next){
  console.log(req.cookies.recordame);
    if (req.body.recordame != undefined && req.session.usuarioLogueado != undefined) {
      db.Usuario.findOne({
        where: {
          email: req.session.usuarioLogueado.email,
        },
      }).then();
    }
        
        next();
    }

module.exports = recordameMiddleware