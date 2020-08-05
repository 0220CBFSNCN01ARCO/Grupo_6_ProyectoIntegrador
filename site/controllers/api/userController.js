const db = require("../../database/models");

const list = async (req, res) => {
  try {
    const usuarios = await db.Usuario.findAll();
    return res.json(usuarios);
  } catch (error) {}
};

const find = async (req, res) => {
  try {
    const usuario = await db.Usuario.findByPk(req.params.id);
    if(usuario ==null){
      return res.json({usuario: "no exisite el usuario con id " + req.params.id})
    }
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const usuario = await db.Usuario.create({
      //aca tenemos que poner los datos del usuario a crear
    });
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const destroy = async (req, res) => {
  try {
    const usuario = await db.Usuario.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const edit = async (req, res) => {
  try {
    const usuario = await db.Usuario.update({
      where: {
        id: req.params.id,
      },
    });
    return res.json(usuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { list, find, destroy, create, edit };