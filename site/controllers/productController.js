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
      return res.render("productEdit", {
        producto,
        usuario: req.session.usuarioLogueado,
      });
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

  catalagoOferta: (req, res) => {
    db.Producto.findAll(
      {
        where:{
          idCategoria : '2'
        }
      }
    ).then(function (productos) {
      return res.render("productOfert", {
        productos,
        usuario: req.session.usuarioLogueado,
      });
    });
  },
};

module.exports = productController;
