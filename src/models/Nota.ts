import {Schema, model, Document} from 'mongoose';
import {IAluno} from './Aluno';
import {IDisciplina} from './Disciplina';

// Interface para tipar a Nota
interface INota extends Document {
    aluno: IAluno['_id'];
    disciplina: IDisciplina['_id'];
    nota: number;
    dataAvaliacao: Date;
}

// Schema do Mongoose para Nota
const notaSchema = new Schema<INota>({
    aluno: {
        type: Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true
    },
    disciplina: {
        type: Schema.Types.ObjectId,
        ref: 'Disciplina',
        required: true
    },
    nota: {
        type: Number,
        required: true
    },
    dataAvaliacao: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

// Modelo do Mongoose para Nota
const Nota = model<INota>('Nota', notaSchema);

export {Nota, INota};
