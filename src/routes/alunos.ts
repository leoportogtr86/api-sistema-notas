import {Router} from 'express';
import {adicionarAluno, atualizarAluno, removerAluno, listarAlunos} from '../controllers/AlunoController';

const router = Router();

// Adicionar Aluno
router.post('/', adicionarAluno);

// Atualizar Aluno
router.put('/:id', atualizarAluno);

// Remover Aluno
router.delete('/:id', removerAluno);

// Listar Alunos
router.get('/', listarAlunos);

export default router;
