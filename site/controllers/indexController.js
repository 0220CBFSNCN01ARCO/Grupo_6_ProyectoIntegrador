const fs = require("fs");
const db = require("../database/models");
const { Op } = require("sequelize");

/*/*--------------------------------lEE EL PRODUCTOS JSON Y CONVIERTE A OBJETO JS--------------------------------*/
//leerJSON = fs.readFileSync("./data/productos.json", { encoding: "utf-8" });
//arrayProductos = JSON.parse(leerJSON);

/*--------------------------------BUSCAR PRODUCTOS EN OFERTAS Y DESTACADOS--------------------------------*/
//const ListadoProductosOferta = arrayProductos.filter((producto) => {
 // return producto.categoria == "Oferta";
//});
//const ListadoProductosDestacado = arrayProductos.filter((producto) => {
//  return producto.categoria == "Destacado";
//});

/*--------------------------------CONTROLADOR CON METODO HOME PAGINA PRINCIPAL--------------------------------*/
const indexController = {
  
   catalagoCompleto: (req, res) => {
     console.log("index");
    db.Producto.findAll().then(function (productos) {
      return res.render("index", {productos: productos, usuario: req.session.usuarioLogueado});
    });
  },

}

module.exports = indexController;