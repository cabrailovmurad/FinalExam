import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { exampleRouter } from './router/elementRouter.js';
const app = express()
app.use(express.json())
app.use(cors())

const port = 3100

app.use('/',exampleRouter)


mongoose.connect('mongodb+srv://dmurad908:dmurad908@cluster0.gicpyze.mongodb.net/')
    .then(() => console.log('Connected!'))
    .catch(() => console.log("Not Connected"));
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})     