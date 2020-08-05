const db = require("../../database/models");


const categoriaController = {
  list: (req, res) => {
    db.Categoria.findAll().then(function (categorias) {
      let respuesta = {
        meta: {
          status: 200,
          totalCategorias: categorias.length,
        },
        data: categorias,
      };

      res.json(respuesta);
    });
  },

  find: (req, res) => {
    db.Categoria.findByPk(req.params.id).then(function (categorias) {
      if (categorias == null) {
        return res.json({
          categorias: "no exisite el categorias con id " + req.params.id,
        });
      }
      let respuesta = {
        meta: {
          status: 200,
        },
        data: categorias,
      };
      res.json(respuesta);
    });
  },

  create: (req, res) => {
    db.Categoria.create({
      descripcion: req.body.descripcion,
    });
    res.json({
      status: 200,
    });
  },

  destroy: (req, res) => {
    db.Categoria.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      status: 200,
    });
  },

  edit: (req, res) => {
    db.Categoria.update({
      where: {
        descripcion: req.body.descripcion,
      },
    });
    res.json({
      status: 200,
    });
  },
};

 

module.exports = categoriaController