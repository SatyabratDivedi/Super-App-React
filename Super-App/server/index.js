import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/loginRoutes.js';

const app = express();
app.use(cors({
    origin: 'https://super-app-7dz2.onrender.com'
}));
app.use(express.json());
dotenv.config();
app.use('/api', route); 

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI).then(()=>{
    console.log('successfully connected to MONGODB');
    app.listen(PORT, ()=>{
        console.log(`Running on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})

app.use('/api', (req, res)=>{
    res.send('hello api');
})

app.use('/', (req, res)=>{
    res.send('hello user');
})