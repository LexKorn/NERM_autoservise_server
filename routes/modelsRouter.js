const Router = require('express');
const router = new Router();

const modelsController = require('../controllers/modelsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, modelsController.create);
router.get('/', authMiddleware, modelsController.getAll);
router.get('/:id', authMiddleware, modelsController.getOne);
router.put('/:id', authMiddleware, modelsController.update);
router.delete('/:model', authMiddleware, modelsController.delete);

module.exports = router;