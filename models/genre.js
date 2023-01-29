const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

/** Added model for genres of the movie */
class Genres extends Model {}

Genres.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      genre_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      undeerscored: true,
      modelName: 'genres',
    },

);

module.exports = Genres;
