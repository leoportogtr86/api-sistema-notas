import { Request, Response } from 'express';
import { Disciplina } from '../models/Disciplina';

// Adicionar Disciplina
export const adicionarDisciplina = async (req: Request, res: Response): Promise<void> => {
    try {
        const { nome, codigo, professor } = req.body;
        const novaDisciplina = new Disciplina({ nome, codigo, professor });
        await novaDisciplina.save();
        res.status(201).json(novaDisciplina);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar Disciplina
export const atualizarDisciplina = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { nome, codigo, professor } = req.body;
        const disciplinaAtualizada = await Disciplina.findByIdAndUpdate(id, { nome, codigo, professor }, { new: true });
        if (!disciplinaAtualizada) {
            res.status(404).json({ error: 'Disciplina não encontrada' });
            return;
        }
        res.status(200).json(disciplinaAtualizada);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// Remover Disciplina
export const removerDisciplina = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const disciplinaRemovida = await Disciplina.findByIdAndDelete(id);
        if (!disciplinaRemovida) {
            res.status(404).json({ error: 'Disciplina não encontrada' });
            return;
        }
        res.status(200).json({ message: 'Disciplina removida com sucesso' });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

// Listar Disciplinas
export const listarDisciplinas = async (req: Request, res: Response): Promise<void> => {
    try {
        const disciplinas = await Disciplina.find();
        res.status(200).json(disciplinas);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
