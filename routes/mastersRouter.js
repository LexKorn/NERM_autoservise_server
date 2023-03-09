const Router = require('express');
const router = new Router();

const mastersController = require('../controllers/mastersController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, mastersController.create);
router.get('/', authMiddleware, mastersController.getAll);
router.get('/:id', authMiddleware, mastersController.getOne);
router.put('/:id', authMiddleware, mastersController.update);
router.delete('/:master', authMiddleware, mastersController.delete);

module.exports = router;