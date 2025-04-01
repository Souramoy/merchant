import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';    

dotenv.config();
const app = express();

app.use(cors({
credentials: true,
origin: "process.env.FRONTEND_URL  || 'http://localhost:3000'",

}));