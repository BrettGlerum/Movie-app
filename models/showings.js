const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connections');

/** Adding a model for showing times
*/
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
      undeerscored: true,
      modelName: 'showings',
    },
);
module.exports = Showings;
