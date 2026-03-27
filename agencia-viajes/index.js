import express from 'express';
import router from './routes/index.js';

//Definir puerto
const port = process.env.port || 4000;

const app = express();

app.use('/', router);

app.listen(port, () => console.log(`El servidor esta funcionando en el puerto ${port}`));