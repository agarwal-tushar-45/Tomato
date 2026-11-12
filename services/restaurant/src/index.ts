import express from 'express';
import connectDB from './config/db.js';

import dotenv from 'dotenv';

dotenv.config();

const app=express();

const PORT=process.env.PORT|| 5000;

app.listen(MessagePort,()=>{
  console.log(`restaurant service is running at ${PORT}`);
  connectDB();
})