const Router = require('express');
const router = new Router();

const testController = require('../controllers/testController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, testController.create);
router.get('/', authMiddleware, testController.getAll);
router.get('/:id', authMiddleware, testController.getOne);
router.put('/:id', authMiddleware, testController.update);
router.delete('/:id', authMiddleware, testController.delete);

module.exports = router;