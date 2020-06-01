const fs = require("fs");

/*/*--------------------------------lEE EL PRODUCTOS JSON Y CONVIERTE A OBJETO JS--------------------------------*/
leerJSON = fs.readFileSync("./data/productos.json", { encoding: "utf-8" });
arrayProductos = JSON.parse(leerJSON);

/*--------------------------------BUSCAR PRODUCTOS EN OFERTAS Y DESTACADOS--------------------------------*/
const ListadoProductosOferta = arrayProductos.filter((producto) => {
  return producto.categoria == "Oferta";
});
const ListadoProductosDestacado = arrayProductos.filter((producto) => {
  return producto.categoria == "Destacado";
});

/*--------------------------------CONTROLADOR CON METODO HOME PAGINA PRINCIPAL--------------------------------*/
const indexController = {

  home: (req,res) => {
    return res.render("index", {ListadoProductosOferta, 
                                ListadoProductosDestacado});
  }
};

module.exports = indexController;