import express, {Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import alunosRouter from './routes/alunos';
import disciplinasRouter from './routes/disciplinas';
import notasRouter from './routes/notas';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI || '';

mongoose.connect(mongodbUri)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use(express.json());

app.use('/alunos', alunosRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/notas', notasRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Rota inicial");
})

app.listen(PORT, () => {
    console.log("Estamos online na porta " + PORT);
})