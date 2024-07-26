import {Schema, model, Document} from 'mongoose';

// Interface para tipar a Disciplina
interface IDisciplina extends Document {
    nome: string;
    codigo: string;
    professor: string;
}

// Schema do Mongoose para Disciplina
const disciplinaSchema = new Schema<IDisciplina>({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    professor: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Modelo do Mongoose para Disciplina
const Disciplina = model<IDisciplina>('Disciplina', disciplinaSchema);

export {Disciplina, IDisciplina};
