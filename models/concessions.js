const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

/** Added a model for the concessions */
class Concessions extends Model {}

Concessions.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        isDecimal: true,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true,

      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      undeerscored: true,
      modelName: 'concessions',
    },

);

module.exports = Concessions;
