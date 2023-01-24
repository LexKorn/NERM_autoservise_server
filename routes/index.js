const Router = require('express');
const router = new Router();

const activitiesRouter = require('./activitiesRouter');
const autopartsRouter = require('./autopartsRouter');
const autosRouter = require('./autosRouter');
const modelsRouter = require('./modelsRouter');
const ordersRouter = require('./ordersRouter');
const stampsRouter = require('./stampsRouter');
const usersRouter = require('./usersRouter');

router.use('/activities', activitiesRouter);
router.use('/autoparts', autopartsRouter);
router.use('/autos', autosRouter);
router.use('/models', modelsRouter);
router.use('/orders', ordersRouter);
router.use('/stamps', stampsRouter);
router.use('/users', usersRouter);

module.exports = router;