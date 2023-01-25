const Router = require('express');
const router = new Router();

const activitiesController = require('../controllers/activitiesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, activitiesController.create);
router.get('/', authMiddleware, activitiesController.getAll);
router.get('/:id', authMiddleware, activitiesController.getOne);
router.put('/:id', authMiddleware, activitiesController.update);
router.delete('/:id', authMiddleware, activitiesController.delete);

module.exports = router;