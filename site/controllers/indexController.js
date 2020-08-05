const db = require("../database/models");
const { Op } = require("sequelize");

const indexController = {
  catalagoCompleto: async (req, res) => {
    const productosOferta = await db.Producto.findAll({
      where: {
        idCategoria: "1",
      },
    });

    const productosDestacados = await db.Producto.findAll({
      where: {
        idCategoria: "2",
      },
    });

    return res.render("index", {
      productosOferta,
      productosDestacados,
      usuario: req.session.usuarioLogueado,
    });
  },
};

module.exports = indexController;
