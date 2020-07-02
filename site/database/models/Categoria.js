module.exports = function (sequelize, dataTypes) {
  let alias = "Categoria";

  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncremental: true,
    },
    descripcion: {
      type: dataTypes.STRING,
    }
  };

  let config = {
    tableName: "categoria",
    timestamps: false
    
  };

  let Categoria = sequelize.define(alias, cols, config);

   Categoria.associate = function (models) {
     Categoria.hasMany(models.Producto, {
       foreignKey:'idCategoria',
       as: 'categorias'
     });
   }

  return Categoria;
};
