import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurant.js'
import cors from 'cors'

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT|| 5000;

app.use("/api/restaurant",restaurantRoutes);

app.listen(MessagePort,()=>{
  console.log(`restaurant service is running at ${PORT}`);
  connectDB();
})