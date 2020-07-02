module.exports = function (sequelize, dataTypes) {
  let alias = "Color";

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
    tableName: "color",
    timestamps: false,
  };

  let Color = sequelize.define(alias, cols, config);

  Color.associate = function (models) {
    Color.hasMany(models.Producto, {
      foreignKey: "idColor",
      as: "colores",
    });
  };

  return Color;
};
