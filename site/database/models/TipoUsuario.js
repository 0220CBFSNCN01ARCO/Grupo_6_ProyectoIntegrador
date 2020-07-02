module.exports = function (sequelize, dataTypes) {
  let alias = "TipoUsuario";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
  };

  let config = {
    tableName: "tipo_usuario",
    timestamps: false,
  };

  let TipoUsuario = sequelize.define(alias, cols, config);

  TipoUsuario.associate = function (models) {
    TipoUsuario.hasMany(models.Usuario, {
      foreignKey: "idTipoUsuario",
      as: "tipoUsuarios",
    });
  };

  return TipoUsuario;
};
