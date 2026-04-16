import express from 'express';
import produtoController from '../controllers/produtoController.js';

const router = express.Router();

router.post('/', produtoController.create);
router.get('/', produtoController.findAll);
router.get('/:id', produtoController.findById);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

export default router;
