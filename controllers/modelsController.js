const {Model} = require('../models/models');
const ApiError = require('../error/ApiError');

class ModelsController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            const {model} = req.body;
            const candidate = await Model.findOne({where: {userId: id, model}});
            if (candidate) {
                return next(ApiError.badRequest('Такая марка авто уже существует!'));
            }

            const modelX = await Model.create({userId: id, model});
            return res.json(modelX);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const models = await Model.findAll({where: {userId: id}});
            return res.json(models);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const model = await Model.findOne({where: {userId: req.user.id, id}});
            return res.json(model);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {model} = req.body;
            await Model.update({model}, {where: {userId: req.user.id, id}});
            return res.json('Model was updated');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {model} = req.params;
            await Model.destroy({where: {userId: req.user.id, model}});
            return res.json('Model was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }    
}

module.exports = new ModelsController();