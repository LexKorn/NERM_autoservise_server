const {Stamp} = require('../models/models');
const ApiError = require('../error/ApiError');

class StampsController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            const {stamp} = req.body;
            const candidate = await Stamp.findOne({where: {userId: id, stamp}});
            if (candidate) {
                return next(ApiError.badRequest('Такая марка авто уже существует!'));
            }

            const stampX = await Stamp.create({userId: id, stamp});
            return res.json(stampX);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const stamps = await Stamp.findAll({where: {userId: id}});
            return res.json(stamps);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const stamp = await Stamp.findOne({where: {userId: req.user.id, id}});
            return res.json(stamp);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {stamp} = req.body;
            await Stamp.update({stamp}, {where: {userId: req.user.id, id}});
            return res.json('Stamp was updated');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {stamp} = req.params;
            await Stamp.destroy({where: {userId: req.user.id, stamp}});
            return res.json('Stamp was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }    
}

module.exports = new StampsController();