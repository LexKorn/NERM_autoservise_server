const Router = require('express');
const router = new Router();

const autopartsController = require('../controllers/autopartsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, autopartsController.create);
router.get('/', authMiddleware, autopartsController.getAll);
router.get('/:id', authMiddleware, autopartsController.getOne);
router.put('/:id', authMiddleware, autopartsController.update);
router.delete('/:id', authMiddleware, autopartsController.delete);

module.exports = router;