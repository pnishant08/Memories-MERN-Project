import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './dbconfig.js';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();

const app=express();
connectDB();
app.use(express.json({limit:'30mb'}));
app.use(express.urlencoded({limit:'30mb',extended:true}));



app.get('/',(req,res)=>{
    res.send('API is working');
});
app.use('/posts',postRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

