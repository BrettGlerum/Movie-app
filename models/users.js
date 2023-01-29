const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


/**  adding user page */
class Users extends Model {
  // eslint-disable-next-line require-jsdoc
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

Users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10],
        },
      },
      // movie_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'movies',
      //     key: 'id',
      //   },
      // },
    },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
          // eslint-disable-next-line max-len
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'users',
    },

);

module.exports = Users;