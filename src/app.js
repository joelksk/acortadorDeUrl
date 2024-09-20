import express, { json } from 'express';
import { shorturlsRouter } from './routes/shorturls.js';
import {userRouter} from './routes/user.js';
import {loginRouter} from './routes/login.js';
import {corsMiddleware} from './middlewares/cors.js'
import path from 'path'
import { fileURLToPath } from 'url';
import 'dotenv/config'
import mongoose from 'mongoose';
const app = express();

mongoose.set('strictQuery',false)
console.log('conecting to Database...');
mongoose.connect(process.env.MONGODB_URI)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware());

// Obtén la ruta del directorio actual (__dirname en ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//routes of shoeturls
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

// // Servir los archivos estáticos del frontend (Next.js)
// app.use(express.static(path.join(__dirname, 'public')));  // Cambia 'out' si los archivos están en otra carpeta
app.use("/", shorturlsRouter);

// // Cualquier otra ruta devolverá el archivo index.html (del frontend)
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html')); // Cambia 'out' si moviste los archivos
// });

export default app
