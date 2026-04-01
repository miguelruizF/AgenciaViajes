import express from 'express';
import router from './routes/routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

//Definir puerto
const port = process.env.PORT || 3000;

const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//Obtener año actual
app.use((req, res, next) => {
    res.locals.actualYear = new Date().getFullYear();
    next();
})

//Definir carpeta publica
app.use(express.static('public'));

// Definir carpeta de vistas (src/views)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'src', 'views', 'layout'));
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/', router);

app.listen(port, () => console.log(`El servidor esta funcionando en el puerto ${port}`));