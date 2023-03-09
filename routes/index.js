const Router = require('express');
const router = new Router();

const activitiesRouter = require('./activitiesRouter');
const autopartsRouter = require('./autopartsRouter');
const autosRouter = require('./autosRouter');
const mastersRouter = require('./mastersRouter');
const modelsRouter = require('./modelsRouter');
const ordersRouter = require('./ordersRouter');
const stampsRouter = require('./stampsRouter');
const testRouter = require('./testRouter');
const usersRouter = require('./usersRouter');

router.use('/activities', activitiesRouter);
router.use('/autoparts', autopartsRouter);
router.use('/autos', autosRouter);
router.use('/masters', mastersRouter);
router.use('/models', modelsRouter);
router.use('/orders', ordersRouter);
router.use('/stamps', stampsRouter);
router.use('/test', testRouter);
router.use('/users', usersRouter);

module.exports = router;