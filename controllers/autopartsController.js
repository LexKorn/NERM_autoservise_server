const {OrderAutopart} = require('../models/models');
const ApiError = require('../error/ApiError');

class AutopartsController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            let {name, price, orderId} = req.body;

            const autopart = await OrderAutopart.create({name, price, orderId, userId: id});
            return res.json(autopart);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const autoparts = await OrderAutopart.findAll({where: {userId: id}});
            return res.json(autoparts);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const autopart = await OrderAutopart.findOne({where: {userId: req.user.id, id}});
            return res.json(autopart);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {name, price} = req.body;

            await OrderAutopart.update({name, price}, {where: {userId: req.user.id, id}});
            return res.json('Autopart was updated..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            await OrderAutopart.destroy({where: {userId: req.user.id, id}});
            return res.json('Autopart was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }
}

module.exports = new AutopartsController();