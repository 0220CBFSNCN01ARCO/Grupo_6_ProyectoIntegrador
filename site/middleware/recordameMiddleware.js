//middleware a nivel de aplicacion PARA RECORDAR USUARIO POR 1 MINUTO

function recordameMiddleware (req,res,next){
    next();
    let usuarioALoguearse;
    if(req.body.recordame != undefined && req.session.usuarioLogueado ==undefined){

        const leerJSON = fs.readFileSync("./data/usuarios.json", {
          encoding: "utf-8",
        });
        
        /*------SI EL JSON LEIDO ESTA VACIO LO CREA, SINO LO PARSEA---------*/

        if (leerJSON == "") {
          arrayDeUsuarios = [];
        } else {
          arrayDeUsuarios = JSON.parse(leerJSON);
        }

        

        for (let i = 0; i < arrayDeUsuarios.length; i++) {
          if (arrayDeUsuarios[i].email == req.cookies.recordame) {
            
              usuarioALoguearse = arrayDeUsuarios[i];
              break;
            }
          }
        }
        req.session.usuarioLogueado = usuarioALoguearse;
        
    }

module.exports = recordameMiddleware