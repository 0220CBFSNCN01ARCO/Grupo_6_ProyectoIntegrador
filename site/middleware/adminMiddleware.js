//este middleware va a verificar si el usuario facu es administrador, el mismo esta en usuarios.json localhost:300/admin?user=facu
//es una prueba, no sirve

const fs = require("fs");


function buscarAdminMiddleware (req,res,next) {

    const leerJson = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});

    let arrayUsuarios;
    
    if(leerJson == ""){
        return res.send('no existen usuarios en la bd');
    }
    arrayUsuarios = JSON.parse(leerJson);
    

    const listadoAdmin = arrayUsuarios.find((array)=>{
        console.log(array.nombre)
        return array.nombre == req.query.user
    });
    
    if(!listadoAdmin){
        res.send("error!!!! NO sos admin");
    }

    next();

}


module.exports = buscarAdminMiddleware;