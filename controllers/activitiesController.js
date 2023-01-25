const {OrderActivity} = require('../models/models');
const ApiError = require('../error/ApiError');

class ActivitiesController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            let {name, price, orderId} = req.body;

            const activity = await OrderActivity.create({name, price, orderId, userId: id});
            return res.json(activity);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const activities = await OrderActivity.findAll({where: {userId: id}});
            return res.json(activities);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const activity = await OrderActivity.findOne({where: {userId: req.user.id, id}});
            return res.json(activity);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {name, price} = req.body;

            await OrderActivity.update({name, price}, {where: {userId: req.user.id, id}});
            return res.json('Activity was updated..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            await OrderActivity.destroy({where: {userId: req.user.id, id}});
            return res.json('Activity was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }
}

module.exports = new ActivitiesController();