const Router = require('express');
const router = new Router();

const stampsController = require('../controllers/stampsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, stampsController.create);
router.get('/', authMiddleware, stampsController.getAll);
router.get('/:id', authMiddleware, stampsController.getOne);
router.put('/:id', authMiddleware, stampsController.update);
router.delete('/:stamp', authMiddleware, stampsController.delete);

module.exports = router;