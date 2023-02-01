const {Test} = require('../models/models');
const ApiError = require('../error/ApiError');

class TestController {
    async create(req, res, next) {
        try {
            const {id} = req.user;
            const {name, phone, country} = req.body;

            const test = await Test.create({userId: id, name, phone, country});
            return res.json(test);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const {id} = req.user;
            const tests = await Test.findAll({where: {userId: id}});
            return res.json(tests);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const test = await Test.findOne({where: {userId: req.user.id, id}});
            return res.json(test);

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params;
            const {name, phone, country} = req.body;
            await Test.update({name, phone, country}, {where: {userId: req.user.id, id}});
            return res.json('Test was updated');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params;
            await Test.destroy({where: {userId: req.user.id, id}});
            return res.json('Test was deleted..');

        } catch(err) {
            next(ApiError.badRequest(err.message));
        }
    }    
}

module.exports = new TestController();