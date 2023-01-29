const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


/** Model for Concessions */
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
          model: 'category',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'concessions',
    },
);
module.exports = Concessions;