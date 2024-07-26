import {Router} from 'express';
import {adicionarNota, atualizarNota, removerNota, listarNotas} from '../controllers/NotaController';

const router = Router();

// Adicionar Nota
router.post('/', adicionarNota);

// Atualizar Nota
router.put('/:id', atualizarNota);

// Remover Nota
router.delete('/:id', removerNota);

// Listar Notas
router.get('/', listarNotas);

export default router;
