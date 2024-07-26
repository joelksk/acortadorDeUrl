import express, { json } from 'express';
import { shorturlsRouter } from './routes/shorturls.js';
import {Middleware} from './middlewares/middleware.js'
import {userRouter} from './routes/user.js';
import {loginRouter} from './routes/login.js';
import {corsMiddleware} from './middlewares/cors.js'
import 'dotenv/config'
import mongoose from 'mongoose';
const app = express();


// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)
console.log('conecting to Database...');
mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.disable('x-powered-by');
app.use(json());
app.use(corsMiddleware());


//routes of shoeturls
app.use("/api/shorturls", shorturlsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

export default app
