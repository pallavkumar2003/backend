import mongoose from 'mongoose';
import { DB_NAME } from './constants';
import dotenv from 'dotenv';
dotenv.config({
    path: './env'
});
import connectDB from './db/index.js';

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch((error) => {
    console.log('Error connecting to MongoDB:', error);
    process.exit(1);
})


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