import express from 'express';
import * as produtoController from '../controllers/ProdutoController.js';   

const router = express.Router();

router.post('/', produtoController.criar); 
router.get('/', produtoController.listar); 
router.get('/:id', produtoController.obterPorId); 
router.put('/:id', produtoController.atualizar); 
router.delete('/:id', produtoController.deletar);

export default router;