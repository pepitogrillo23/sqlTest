const router = require('express').Router();
const CitaController = require('../controllers/CitaController');

router.get('/',CitaController.getAll);

module.exports = router;