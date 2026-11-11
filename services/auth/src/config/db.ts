import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try{
      await mongoose.connect(process.env.MONGO_URI as string,{
        dbName:"Zomato_Clone",
      }); 

      console.log("MongoDB connected successfully");
  }catch(error){
      console.error("Error connecting to MongoDB:", error);
  }
};
export default connectDB;