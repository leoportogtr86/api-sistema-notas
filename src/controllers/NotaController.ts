import {Request, Response} from 'express';
import {Nota} from '../models/Nota';
import {Aluno} from '../models/Aluno';
import {Disciplina} from '../models/Disciplina';

// Adicionar Nota
export const adicionarNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const {alunoId, disciplinaId, nota, dataAvaliacao} = req.body;

        // Verificar se o aluno e a disciplina existem
        const aluno = await Aluno.findById(alunoId);
        const disciplina = await Disciplina.findById(disciplinaId);

        if (!aluno || !disciplina) {
            res.status(404).json({error: 'Aluno ou Disciplina não encontrados'});
            return;
        }

        const novaNota = new Nota({aluno: alunoId, disciplina: disciplinaId, nota, dataAvaliacao});
        await novaNota.save();
        res.status(201).json(novaNota);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Atualizar Nota
export const atualizarNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const {nota, dataAvaliacao} = req.body;
        const notaAtualizada = await Nota.findByIdAndUpdate(id, {nota, dataAvaliacao}, {new: true});

        if (!notaAtualizada) {
            res.status(404).json({error: 'Nota não encontrada'});
            return;
        }
        res.status(200).json(notaAtualizada);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Remover Nota
export const removerNota = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const notaRemovida = await Nota.findByIdAndDelete(id);

        if (!notaRemovida) {
            res.status(404).json({error: 'Nota não encontrada'});
            return;
        }
        res.status(200).json({message: 'Nota removida com sucesso'});
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};

// Listar Notas
export const listarNotas = async (req: Request, res: Response): Promise<void> => {
    try {
        const notas = await Nota.find().populate('aluno').populate('disciplina');
        res.status(200).json(notas);
    } catch (err: any) {
        res.status(400).json({error: err.message});
    }
};
