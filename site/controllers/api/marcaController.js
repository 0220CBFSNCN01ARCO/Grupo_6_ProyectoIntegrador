const db = require("../../database/models");

const list = async (req, res) => {
  try {
    const marcas = await db.Marca.findAll();
    return res.json(marcas);
  } catch (error) {}
};

const find = async (req, res) => {
  try {
    const marca = await db.Marca.findByPk(req.params.id);
    if (marca == null) {
      return res.json({
        usuario: "no existe el marca con id " + req.params.id,
      });
    }
    return res.json(marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const marca = await db.Marca.create({
      nombre: req.params.nombre,
    });
    return res.json(marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const destroy = async (req, res) => {
  try {
    const marca = await db.Marca.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const edit = async (req, res) => {
  try {
    const marca = await db.Marca.update({
      where: {
        id: req.params.id,
      },
    });
    return res.json(marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { list, find, destroy, create, edit };
