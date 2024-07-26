import {Schema, model, Document} from 'mongoose';

// Interface para tipar o Aluno
interface IAluno extends Document {
    nome: string;
    matricula: string;
    dataNascimento: Date;
    curso: string;
}

// Schema do Mongoose para Aluno
const alunoSchema = new Schema<IAluno>({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    matricula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    curso: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Modelo do Mongoose para Aluno
const Aluno = model<IAluno>('Aluno', alunoSchema);

export {Aluno, IAluno};
