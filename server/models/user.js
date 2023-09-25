'use strict';
const {
  Model
} = require('sequelize');
const encryptPw = require("../helpers/encrpyt-pw");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: `Email must be unique`},
      validate: {
        notNull: { msg: `Email is required` },
        notEmpty: { msg: `Email is required` },
        isEmail: { msg: `Invalid email format` },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: `Password is required` },
        notEmpty: { msg: `Password is required` },
      }
    }
  }, {
    sequelize,
    hooks:{
      beforeCreate(user, options){
        user.password = encryptPw(user.password)
      }
    },
    modelName: 'User',
  });
  return User;
};