const {Auto} = require('../models/models');
const ApiError = require('../error/ApiError');

class AutosController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            let {year, vin, stateNumber, owner, phone, stampId, modelId} = req.body;

            // const candicate = await Auto.findOne({where: {userId: id, stateNumber}});
            // if (candicate) {
            //     return next(ApiError.badRequest('Автомобиль с таким гос.номером уже существует!'));
            // } 

            const auto = await Auto.create({year, vin, stateNumber, owner, phone, stampId, modelId, userId: id});
            return res.json(auto);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const autos = await Auto.findAll({where: {userId: id}});
            return res.json(autos);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const auto = await Auto.findOne({where: {userId: req.user.id, id}});
            return res.json(auto);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {year, vin, stateNumber, owner, phone, stampId, modelId} = req.body;

            await Auto.update({year, vin, stateNumber, owner, phone, stampId, modelId}, {where: {userId: req.user.id, id}});
            return res.json('Auto was updated..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) { // дописать с удалением заказов, работ, запчастей (см удаление автора)
        try {
            const {id} = req.params;
            await Auto.destroy({where: {userId: req.user.id, id}});
            return res.json('Auto was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }
}

module.exports = new AutosController();