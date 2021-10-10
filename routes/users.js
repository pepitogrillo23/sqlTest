const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.get('/',UserController.getAll);
router.post('/',UserController.create);
router.put('/:id',UserController.update);

module.exports = router;