const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');


/** Adds a model for movies */
class Movies extends Model {}

Movies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      run_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true,

      },
      reviews: {
        type: DataTypes.INTEGER,
        references: {
          model: 'reviews',
          key: 'id',
        },
      },
      genre: {
        type: DataTypes.INTEGER,
        references: {
          mode: 'genres',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      undeerscored: true,
      modelName: 'movies',
    },

);

module.exports = Movies;
