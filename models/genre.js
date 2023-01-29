const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

/** Added mdoel for Genres */
class Genres extends Model {}

Genres.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
      modelName: 'genres',
    },
);

module.exports = Genres;