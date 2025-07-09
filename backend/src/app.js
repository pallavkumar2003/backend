import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', // Allow all origins by default
    credentials: true, // Allow cookies to be sent with requests
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));
app.use(cookieParser());
app.use(express.json({limit: '50mb'})); // Increased limit for larger JSON payloads
app.use(express.urlencoded({extended: true, limit: '50mb'})); // Increased limit for larger URL-encoded payloads
app.use(express.static('public')); // Serve static files from the 'public' directory

export {app};