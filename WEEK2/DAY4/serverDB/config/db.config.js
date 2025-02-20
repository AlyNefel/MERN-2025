import mongoose from'mongoose'
// we will install it to access the data inside .env
import dotenv from'dotenv'

dotenv.config()

//we will create a function to connect to our DB
const connectDB=async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        dbName:"project1"
       })
       console.log("MongoDb connected!!!!")
    } catch (error) {
        console.error(error)
        //exit
        process.exit(1)
    }
}

export default connectDB
