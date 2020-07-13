const db = require("../database/models");
const { Op } = require("sequelize");



let catalagoOferta = ()=> {
    db.Producto.findAll(
      {
        where:{
          idCategoria : '3'
        }
      }
    ).then(function(producto){
      
      return producto;
    });
    
  }

  let catalagoFull = () => {
    db.Producto.findAll({
      where: {
        idCategoria: "3",
      },
    }).then(function (producto) {
      return producto;
    });
  };


const indexController = {



  catalagoCompleto: (req, res) => {
   
    db.Producto.findAll().then(function (productos) {
      
      
      return res.render("index", {
        productos: productos,
        usuario: req.session.usuarioLogueado,
        
      });
    });
  },

};

module.exports = indexController;
