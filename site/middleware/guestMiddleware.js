//middleware no deja entrar a paginas donde debes estar registrado y enviará a pagina de invitado

function guestMiddleware (req,res,next){

    if (req.session.usuarioLogueado == undefined) {
      next();
    } else {
      res.render('userProfile',{usuarioLogueado:req.session.usuarioLogueado}); //DEBERIAMOS LLEVAR A PAGINA GUEST
    }
    
}

module.exports = guestMiddleware