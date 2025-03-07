import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName:process.env.DB_NAME
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
export default connectDB
