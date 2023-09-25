'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      sku: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'SKU is required' },
          notEmpty: { msg: 'SKU cannot be empty' },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Product name is required' },
          notEmpty: { msg: 'Product name cannot be empty' },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'Description is required' },
          notEmpty: { msg: 'Description cannot be empty' },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Weight is required' },
          isInt: { msg: 'Weight must be an integer' },
        },
      },
      width: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Width is required' },
          isInt: { msg: 'Width must be an integer' },
        },
      },
      length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Length is required' },
          isInt: { msg: 'Length must be an integer' },
        },
      },
      height: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Height is required' },
          isInt: { msg: 'Height must be an integer' },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Image URL is required' },
          notEmpty: { msg: 'Image URL cannot be empty' },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: 'Price is required' },
          isInt: { msg: 'Price must be an integer' },
        },
      },
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  
  return Product;
};
