import {Router} from 'express';
import {
    adicionarDisciplina,
    atualizarDisciplina,
    removerDisciplina,
    listarDisciplinas
} from '../controllers/DisciplinaController';

const router = Router();

// Adicionar Disciplina
router.post('/', adicionarDisciplina);

// Atualizar Disciplina
router.put('/:id', atualizarDisciplina);

// Remover Disciplina
router.delete('/:id', removerDisciplina);

// Listar Disciplinas
router.get('/', listarDisciplinas);

export default router;
