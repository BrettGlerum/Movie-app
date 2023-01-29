const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

/** Added model for movies */
class Movies extends Model {}

Movies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      // eslint-disable-next-line new-cap
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    run_time: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        mode: "genres",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "movies",
  }
);
module.exports = Movies;