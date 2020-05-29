const fs = require("fs");

/*/*--------------------------------lEE EL PRODUCTOS JSON Y CONVIERTE A OBJETO JS--------------------------------*/
leerJSON = fs.readFileSync("productos.json", { encoding: "utf-8" });
arrayProductos = JSON.parse(leerJSON);

/*--------------------------------BUSCAR PRODUCTOS EN OFERTAS Y DESTACADOS--------------------------------*/
const ListadoProductosOferta = arrayProductos.filter((producto) => {
  return producto.categoria == "oferta";
});
const ListadoProductosDestacado = arrayProductos.filter((producto) => {
  return producto.categoria == "destacado";
});

/*--------------------------------CONTROLADOR CON METODO HOME CREAR, DETALLE, EDITAR Y ELIMINAR--------------------------------*/
const productController = {
  
  create: (req, res) => {

    const ultimoItemDelArray = arrayProductos[arrayProductos.length - 1];

     let producto = {
       id: ultimoItemDelArray.id + 1,
       nombre: req.body.nombre,
       precio: req.body.precio,
       descripcion: req.body.descripcion,
       marca: req.body.marca,
       cuotas: req.body.cuotas,
       stock: req.body.stock,
       image: req.file.filename,
       color: req.body.color,
       categoria: req.body.categoria
     };
     console.log(producto);
     arrayProductos.push(producto);   

     productoJSON = JSON.stringify(arrayProductos);
     fs.writeFileSync('productos.json', productoJSON);
    
    res.send("producto creado exitosamente!!! volver a producto haga click aqui");
  },
  detalle: (req,res)=>{
    let idProduct = req.params.id;
    productoAMostrar = arrayProductos[idProduct];
    //res.send("vamos a mostrar el producto"+ idProduct);
    res.render('productDetail', productoAMostrar);
  },

  edit: (req,res,next)=> {
    console.log("hola vamos a editar");
    let idProductoEdit = req.params.id;
    
    let productoAEditar = arrayProductos.find((product) => product.id == idProductoEdit);
    

    res.render("productEdit", {productoAEditar});
    
  },

  update: (req,res) => {
    let idProductoEdit = req.params.id;
    let productoAEditar = arrayProductos.find((product) => product.id == idProductoEdit
    );
    console.log(productoAEditar);

      
        productoAEditar.id = idProductoEdit,
        productoAEditar.nombre = productoAEditar.nombre,
        productoAEditar.precio = productoAEditar.precio,
        productoAEditar.cuotas = productoAEditar.cuotas,
        productoAEditar.stock = productoAEditar.stock,
        productoAEditar.color = productoAEditar.color,
        productoAEditar.categoria = productoAEditar.categoria,
        productoAEditar.descripcion = productoAEditar.descripcion
            
    
    console.log(productoAEditar);

    arrayProductos.push(productoAEditar);

    productoJSON = JSON.stringify(arrayProductos);
    fs.writeFileSync("productos.json", productoJSON);
    res.send("se actualizó el producto");
  },

  ofertasDestacados: (req,res) => {
    
    return res.render("productCatalog", {ListadoProductosOferta , ListadoProductosDestacado});
  }
}

module.exports = productController;