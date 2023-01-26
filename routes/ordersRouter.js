const Router = require('express');
const router = new Router();

const ordersController = require('../controllers/ordersController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, ordersController.create);
router.get('/', authMiddleware, ordersController.getAll);
router.get('/:id', authMiddleware, ordersController.getOne);
router.put('/:id', authMiddleware, ordersController.update);
router.delete('/:id', authMiddleware, ordersController.delete);

module.exports = router;