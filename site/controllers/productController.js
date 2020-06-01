const fs = require("fs");

/*/*--------------------------------lEE EL PRODUCTOS JSON Y CONVIERTE A OBJETO JS--------------------------------*/
leerJSON = fs.readFileSync("productos.json", { encoding: "utf-8" });
arrayProductos = JSON.parse(leerJSON);

/*--------------------------------BUSCAR PRODUCTOS EN OFERTAS Y DESTACADOS--------------------------------*/
const ListadoProductosOferta = arrayProductos.filter((producto) => {
  return producto.categoria == "Oferta";
});
const ListadoProductosDestacado = arrayProductos.filter((producto) => {
  return producto.categoria == "Destacado";
});

/*--------------------------------CONTROLADOR CON METODO HOME CREAR, DETALLE, EDITAR Y ELIMINAR--------------------------------*/
const productController = {
  
  create: (req, res) => {

    const body = req.body;
    const cantidadProductos = arrayProductos.length;
    const nuevoID = cantidadProductos+1;

     let producto = {
       id: nuevoID,
       nombre: body.nombre,
       marca: body.marca,
       precio: body.precio,
       cuotas: body.cuotas,
       stock: body.stock,
       color: body.color,
       categoria: body.categoria,
       descripcion: body.descripcion,
       imagen: req.file.filename
     };
     
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

  ofertasDestacados: (req,res) => {
    
    return res.render("productCatalog", {ListadoProductosOferta , ListadoProductosDestacado});
  },

  edit: (req,res,next)=> {
    console.log("hola vamos a editar");
    let idProductoEdit = req.params.id;
    
    let productoAEditar = arrayProductos.find((product) => product.id == idProductoEdit);
    
    res.render("productEdit", {productoAEditar});
    
  },

  update: (req,res) => {
                         /* 
      pasos para editar un registro
      1- tomar el ID que viene para saber cual es
      2- buscarlo
      3- editar
      4- grabar
      5- redireccionar
        productoAEditar.id = idProductoEdit,
        productoAEditar.nombre = productoAEditar.nombre,
        productoAEditar.precio = productoAEditar.precio,
        productoAEditar.cuotas = productoAEditar.cuotas,
        productoAEditar.stock = productoAEditar.stock,
        productoAditar.color = productoAEditar.color,
        productoAEditar.categoria = productoAEditar.categoria,
        productoAEditar.descripcion = productoAEditar.descripcion

    */
    let idProductoEdit = req.params.id;
    let productoAEditar = arrayProductos.find(
      (product) => product.id == idProductoEdit
    );

    

    arrayProductos.push(productoAEditar);

    productoJSON = JSON.stringify(arrayProductos);
    fs.writeFileSync("productos.json", productoJSON);
    res.send("se actualizó el producto");
  }

  
}

module.exports = productController;