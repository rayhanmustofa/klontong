const bcrypt = require("bcryptjs/dist/bcrypt");
const comparePw = require("../helpers/compare-pw");
const { convertPayloadToToken } = require("../helpers/jwt");
const { User, Product, Category } = require("../models");
const { Op } = require("sequelize");
const BASE_URL = `http://localhost:8080/`
const fs = require('fs');
const { get } = require("http");



class controller {
    static async register(req, res, next) {
        try {
            const { email, password } = req.body;
            console.log(email)
            const newUser = await User.create({ email, password});
            res.status(200).json({
                statusCode: 200,
                message: newUser,
            });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const foundUser = await User.findOne({
                where: {
                    email: email,
                },
            });

            if (!foundUser) {
                throw { name: `UserNotFound` };
            }
            
            const passwordTrue = comparePw(password, foundUser.password);

            if (!passwordTrue) {
                throw { name: `UserNotFound` };
            }

            const payloadForClient = {
                id: foundUser.id,
            };

            const token = convertPayloadToToken(payloadForClient);

            res.status(200).json({
                statusCode: 200,
                data: {
                    accessToken: token,
                    userId: foundUser.id,
                    displayEmail: foundUser.email,
                },
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }


    static async getProduct(req, res, next) {
        try {
            const { page = 1, name } = req.query
            let limit = 6

            let options = { }

            if (name) {
                options.name = { [Op.iLike]: `%${name}%` };
            }

            let totalData = await Product.findAll({
                order: [[`id`, `asc`]],
                where: options,
            })

            totalData = totalData.length
            let totalPage = Math.ceil(totalData / limit)

            const products = await Product.findAll({
                limit,
                offset: limit * (page - 1),
                order: [[`id`, `asc`]],
                where: options,
            });

            res.status(200).json({
                statusCode: 200,
                page : +page,
                totalPage,
                data: products,
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }


    static async getProductById(req, res, next) {
        try {
            const product = await Product.findByPk(+req.params.id, {
                include: [Category]
            });
            if (!product) {
                throw { name: `id_not_found` };
            }
            res.status(200).json({
                statusCode: 200,
                data: product,
            });
        } catch (err) {
            next(err);
        }
    }

    
      static async createProduct(req, res, next) {
        try {
            let { CategoryId, sku, name, description, weight, width, length, height, image, price } = req.body;

            const createdProduct = await Product.create({
                CategoryId, sku, name, description, weight, width, length, height, image, price
            });

            res.status(201).json({
                statusCode: 201,
                message: "Report created successfully",
                data: createdProduct,
            });
        } catch (err) {
            console.log(err);
            next(err);
        }
    }


    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll();

            res.status(200).json({
                statusCode: 200,
                data: categories,
            });
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

}

module.exports = controller