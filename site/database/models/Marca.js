module.exports = function (sequelize, dataTypes) {
  let alias = "Marca";

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
    tableName: "marca",
    timestamps: false,
  };

  let Marca = sequelize.define(alias, cols, config);

  Marca.associate = function (models) {
    Marca.hasMany(models.Producto, {
      foreignKey: "idMarca",
      as: "marcas",
    });
  };

  return Marca;
};
