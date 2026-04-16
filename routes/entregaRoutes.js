import express from 'express';
import entregaController from '../controllers/entregaController.js';

const router = express.Router();

router.post('/', entregaController.create);
router.get('/', entregaController.findAll);
router.get('/:id', entregaController.findById);
router.put('/:id', entregaController.update);
router.delete('/:id', entregaController.delete);

export default router;