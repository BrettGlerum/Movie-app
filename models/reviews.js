const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

/** Adds movel for user reviews */
class Reviews extends Model {}

Reviews.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'movies',
          key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      undeerscored: true,
      modelName: 'reviews',
    },

);

module.exports = Reviews;
