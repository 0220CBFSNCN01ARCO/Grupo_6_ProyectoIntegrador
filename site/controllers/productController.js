const fs = require("fs");
const db = require("../database/models");
const { Op } = require("sequelize");



/*--------------------------------CONTROLADOR CON METODO HOME CREAR, DETALLE, EDITAR Y ELIMINAR--------------------------------*/
const productController = {
  crear_post: (req, res) => {
    db.Producto.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      stock: req.body.stock,
      foto: req.file.filename,
      idMarca: req.body.marca,
      idCategoria: req.body.categoria,
      idColor: req.body.color,
      idCuota: req.body.cuota,
    });
    res.redirect("/product");
  },

  crear_get: (req, res) => {
    db.Categoria.findAll().then(function (categorias) {
      return res.render("productAdd", {
        categorias,
        usuario: req.session.usuarioLogueado,
      });
    });
    //console.log("colores");
    //db.Color.findAll().then(function (colores) {
    //return res.render("productAdd", { colores });
    //});
  },

  editar_get: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: "categoria" },
        { association: "marca" },
        { association: "color" },
        { association: "cuota" },
      ],
    }).then(function (producto) {
      return res.render("productEdit", { producto, usuario: req.session.usuarioLogueado });
    });
  },

  editar_post: (req, res) => {
    db.Producto.update(
      {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
        idMarca: req.body.marca,
        idCategoria: req.body.categoria,
        idColor: req.body.color,
        idCuota: req.body.cuota,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/product/list");
  },

  detail_get: (req, res) => {
    db.Producto.findByPk(req.params.id).then(function (producto) {
      return res.render("productDetail", {
        producto,
        usuario: req.session.usuarioLogueado,
      });
    });
  },

  borrar: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/product/list");
  },

  listadoProductos: (req, res) => {
    db.Producto.findAll({
      include: [
        { association: "categoria" },
        { association: "marca" },
        { association: "color" },
        { association: "cuota" },
      ],
    }).then((productos) => {
      return res.render("ProductList", {
        productos,
        usuario: req.session.usuarioLogueado,
      });
    });
  },

  catalagoCompleto: (req, res) => {
    db.Producto.findAll().then(function (productos) {
      return res.render("productCatalog", {
        productos,
        usuario: req.session.usuarioLogueado,
      });
    });
  },

  /*/*--------------------------------lEE EL PRODUCTOS JSON Y CONVIERTE A OBJETO JS--------------------------------
leerJSON = fs.readFileSync("./data/productos.json", { encoding: "utf-8" });
arrayProductos = JSON.parse(leerJSON);

--------------------------------BUSCAR PRODUCTOS EN OFERTAS Y DESTACADOS--------------------------------
const ListadoProductosOferta = arrayProductos.filter((producto) => {
  return producto.categoria == "Oferta";
});
const ListadoProductosDestacado = arrayProductos.filter((producto) => {
  return producto.categoria == "Destacado";
});
  /*-----------------------------------------JSON-----------------------------------------

  create: (req, res) => {
    const body = req.body;
    const cantidadProductos = arrayProductos.length;
    const nuevoID = cantidadProductos + 1;

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
      imagen: req.file.filename,
    };

    arrayProductos.push(producto);

    productoJSON = JSON.stringify(arrayProductos);
    fs.writeFileSync("./data/productos.json", productoJSON);

    res.send(
      "producto creado exitosamente!!! volver a producto haga click aqui"
    );
  },

  detalle: (req, res) => {
    let idProduct = req.params.id;
    productoAMostrar = arrayProductos[idProduct];
    //res.send("vamos a mostrar el producto"+ idProduct);
    res.render("productDetail", productoAMostrar);
  },

  catalagoOfertas: (req, res) => {
    return res.send("aca van las ofertas");
  },

  //return res.render("productCatalog", {ListadoProductosOferta , ListadoProductosDestacado});

  edit: (req, res, next) => {
    console.log("hola vamos a editar");
    let idProductoEdit = req.params.id;

    let productoAEditar = arrayProductos.find(
      (product) => product.id == idProductoEdit
    );

    res.render("productEdit", { productoAEditar });
  },

  update: (req, res) => {
    let idProductoEdit = req.params.id;
    let indiceProductoEditar = arrayProductos.findIndex(
      (product) => product.id == idProductoEdit
    );
    let nuevoProducto = arrayProductos[indiceProductoEditar];
    const body = req.body;

    nuevoProducto.precio = body.precio;
    nuevoProducto.cuotas = body.cuotas;
    nuevoProducto.stock = body.stock;
    nuevoProducto.color = body.color;
    nuevoProducto.categoria = body.categoria;
    nuevoProducto.descripcion = body.descripcion;

    arrayProductos[indiceProductoEditar] = nuevoProducto;
    console.log(nuevoProducto);
    productoJSON = JSON.stringify(arrayProductos);
    fs.writeFileSync("./data/productos.json", productoJSON);
    res.send("se actualizó el producto");
  },

  delete: (req, res) => {
    console.log("vamos a borrar");
    let productoAEliminar = req.params.id;
    console.log(productoAEliminar);
    arrayProductos = arrayProductos.filter((producto) => {
      return producto.id != productoAEliminar;
    });
    console.log(arrayProductos);
    productoJSON = JSON.stringify(arrayProductos);
    fs.writeFileSync("./data/productos.json", productoJSON);
    res.send("eliminó el producto");
  },
  */
};


module.exports = productController;