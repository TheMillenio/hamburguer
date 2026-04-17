import express from 'express';
import entregaController from '../controllers/entregaController.js';

const router = express.Router();

router.post('/', entregaController.store);
router.get('/', entregaController.index);
router.get('/:id', entregaController.show);
router.put('/:id', entregaController.update);
router.delete('/:id', entregaController.destroy);

export default router;