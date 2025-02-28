import express from 'express';
import dotEnv from 'dotenv'
import authRouter from './routes/auth.route.js';
import { connectDb } from './db/db.js';

const app = express();
dotEnv.config()

const Port = process.env.PORT

app.use("/api/auth",authRouter)

app.listen(Port,()=>{
    console.log(`running at port ${Port}`)
    connectDb()
})