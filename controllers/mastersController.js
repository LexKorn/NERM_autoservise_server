const {Master} = require('../models/models');
const ApiError = require('../error/ApiError');

class MastersController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            const {master} = req.body;
            const candidate = await Master.findOne({where: {userId: id, master}});
            if (candidate) {
                return next(ApiError.badRequest('Такой мастер уже существует!'));
            }

            const masterX = await Master.create({userId: id, master});
            return res.json(masterX);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const masters = await Master.findAll({where: {userId: id}});
            return res.json(masters);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const master = await Master.findOne({where: {userId: req.user.id, id}});
            return res.json(master);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {master} = req.body;
            await Master.update({master}, {where: {userId: req.user.id, id}});
            return res.json('Master was updated');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {master} = req.params;
            await Master.destroy({where: {userId: req.user.id, master}});
            return res.json('Master was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }    
}

module.exports = new MastersController();