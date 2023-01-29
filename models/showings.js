const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

/** added class for showings */
class Showings extends Model {}

Showings.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      times: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      tickets_available: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticket_cost: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        isDecimal: true,

      },
      movie_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'movies',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'showings',
    },
);
module.exports = Showings;