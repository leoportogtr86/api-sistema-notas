import {Request, Response} from 'express';
import {Aluno} from '../models/Aluno';

// Adicionar Aluno
export const adicionarAluno = async (req: Request, res: Response): Promise<void> => {
    try {
        const {nome, matricula, dataNascimento, curso} = req.body;
        const novoAluno = new Aluno({nome, matricula, dataNascimento, curso});
        await novoAluno.save();
        res.status(201).json(novoAluno);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Atualizar Aluno
export const atualizarAluno = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const {nome, matricula, dataNascimento, curso} = req.body;
        const alunoAtualizado = await Aluno.findByIdAndUpdate(id, {
            nome,
            matricula,
            dataNascimento,
            curso
        }, {new: true});
        if (!alunoAtualizado) {
            res.status(404).json({error: 'Aluno não encontrado'});
            return;
        }
        res.status(200).json(alunoAtualizado);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Remover Aluno
export const removerAluno = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const alunoRemovido = await Aluno.findByIdAndDelete(id);
        if (!alunoRemovido) {
            res.status(404).json({error: 'Aluno não encontrado'});
            return;
        }
        res.status(200).json({message: 'Aluno removido com sucesso'});
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Listar Alunos
export const listarAlunos = async (req: Request, res: Response): Promise<void> => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};
