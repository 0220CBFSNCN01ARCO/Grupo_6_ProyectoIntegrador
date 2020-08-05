const db = require("../../database/models");

const productController = {
  list: (req, res) => {
    db.Producto.findAll({
      include: [
        { association: "categoria" },
        { association: "marca" },
        { association: "color" },
        { association: "cuota" },
      ],
    }).then(function (productos) {
      let respuesta = {
        meta: {
          status: 200,
          totalProductos: productos.length,
        },
        data: productos,
      };

      res.json(respuesta);
    });
  },

  find: (req, res) => {
    db.Producto.findByPk(req.params.id)
    .then(function (productos) {
      if (productos == null) {
        return res.json({
          productos: "no exisite el producto con id " + req.params.id,
        });
      }
      let respuesta = {
        meta: {
          status: 200,
        },
        data: productos,
      };
      res.json(respuesta);
    });
  },

  create: (req, res) => {
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
    res.json({
        status:200
    });
  },
};

module.exports = productController;
