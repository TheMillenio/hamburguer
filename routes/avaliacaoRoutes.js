import express from 'express';
import avaliacaoController from '../controllers/AvaliacaoController.js';

const router = express.Router();

router.post('/', avaliacaoController.create);
router.get('/', avaliacaoController.findAll);
router.get('/:id', avaliacaoController.findById);
router.put('/:id', avaliacaoController.update);
router.delete('/:id', avaliacaoController.delete);

export default router;

