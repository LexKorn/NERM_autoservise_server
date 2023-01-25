const Router = require('express');
const router = new Router();

const autosController = require('../controllers/autosController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, autosController.create);
router.get('/', authMiddleware, autosController.getAll);
router.get('/:id', authMiddleware, autosController.getOne);
router.put('/:id', authMiddleware, autosController.update);
router.delete('/:id', authMiddleware, autosController.delete);

module.exports = router;