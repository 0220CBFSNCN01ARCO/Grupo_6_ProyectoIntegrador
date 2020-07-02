module.exports = function (sequelize, dataTypes) {
  let alias = "Usuario";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    apellido: {
      type: dataTypes.STRING,
    },
    email: {
      type: dataTypes.STRING,
    },
    password: {
      type: dataTypes.STRING,
    },
    avatar: {
      type: dataTypes.BLOB,
    },
    direccion: {
      type: dataTypes.STRING,
    },
    idTipoUsuario: {
      type: dataTypes.INTEGER
    }
  };

  let config = {
    tableName: "usuario",
    timestamps: false,
    underscored: false,
  };

  let Usuario = sequelize.define(alias, cols, config);

  Usuario.associate = function (models) {
    Usuario.belongsTo(models.TipoUsuario, {
      foreignKey: "idTipoUsuario",
      as: "tipoUsuario",
    });
  };

  return Usuario;
};
