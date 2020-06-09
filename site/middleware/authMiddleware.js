//middleware para mostrar rutas solo en usuarios autenticados

function authMiddleware (req,res,next){

    if(req.session.usuarioLogueado == undefined)
    {
        res.render('login');//ACA DEBERIAMOS LLEVAR A PAGINA DE REGISTRACIÓN
    } else{
        next();
    }
}

module.exports = authMiddleware;