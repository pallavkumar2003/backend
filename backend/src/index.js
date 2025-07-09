import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/index.js';

connectDB({
    path: './env'
});


// import express from 'express';


// const app = express();

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on('error', ()=>{
//             console.error('MongoDB connection error');
//             throw new Error('MongoDB connection error');
//         })
//         app.listen(process.env.PORT, () => {
//             console.log('Connected to MongoDB');
//         });
//     }
//     catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// })()