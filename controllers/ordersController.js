const {Order} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrdersController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            let {opened, closed, cost, income, profit, comment, autoId, masterId} = req.body;

            const order = await Order.create({opened, closed, cost, income, profit, comment, autoId, masterId, userId: id});
            return res.json(order);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const orders = await Order.findAll({where: {userId: id}});
            return res.json(orders);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const order = await Order.findOne({where: {userId: req.user.id, id}});
            return res.json(order);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {opened, closed, cost, income, profit, comment, masterId} = req.body;

            await Order.update({opened, closed, cost, income, profit, comment, masterId}, {where: {userId: req.user.id, id}});
            return res.json('Order was updated..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) { // дописать с удалением работ, запчастей (см удаление автора)
        try {
            const {id} = req.params;
            await Order.destroy({where: {userId: req.user.id, id}});
            return res.json('Order was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }
}

module.exports = new OrdersController();