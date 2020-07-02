module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
    },
    nombre: {
      type: dataTypes.STRING,
    },
    descripcion: {
      type: dataTypes.STRING,
    },
    precio: {
      type: dataTypes.DOUBLE,
    },
    stock: {
      type: dataTypes.INTEGER,
    },
    foto: {
      type: dataTypes.BLOB,
    },
  };

  let config = {
    tableName: "producto",
    timestamps: false
    
  };

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models)
  {
    Producto.belongsTo(models.Categoria,{
      foreignKey:"idCategoria",
      as: "categoria"
    });

    Producto.belongsTo(models.Marca, {
      foreignKey: "idMarca",
      as: "marca",
    });

    Producto.belongsTo(models.Color, {
      foreignKey: "idColor",
      as: "color",
    });

    Producto.belongsTo(models.Color, {
      foreignKey: "idCuota",
      as: "cuota",
    });

  }
  return Producto;
};
