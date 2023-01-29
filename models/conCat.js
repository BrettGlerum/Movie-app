const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');

/** Adding a model for concession categories */
class conCat extends Model {};

// model below is for the Concession Categories

conCat.init(
    {
      // Defining ID
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // Defining category_name
      category_name: {
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
