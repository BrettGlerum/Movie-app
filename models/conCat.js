const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');


/** Added model for concession categoires */
class conCat extends Model {}

conCat.init(
    {// Defining ID
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // Defining category_name
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'category',
    },
);
module.exports = conCat;