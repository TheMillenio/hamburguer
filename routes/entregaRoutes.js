const express = require('express');
const router = express.Router();

const entregaController = require('../controllers/entregaController');

router.post('/', entregaController.create);
router.get('/', entregaController.findAll);
router.get('/:id', entregaController.findById);
router.put('/:id', entregaController.update);
router.delete('/:id', entregaController.delete);

module.exports = router;