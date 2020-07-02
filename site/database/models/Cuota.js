module.exports = function (sequelize, dataTypes) {
  let alias = "Cuota";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
    },
    descripcion: {
      type: dataTypes.STRING,
    },
  };

  let config = {
    tableName: "cuota",
    timestamps: false,
  };

  let Cuota = sequelize.define(alias, cols, config);

  Cuota.associate = function (models) {
    Cuota.hasMany(models.Producto, {
      foreignKey: "idCuota",
      as: "cuotas",
    });
  };

  return Cuota;
};
