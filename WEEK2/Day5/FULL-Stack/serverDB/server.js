import express from 'express'
import userRoutes from './routes/user.routes.js'
import dotenv from'dotenv'
import connectDB from './config/db.config.js'
import cors from 'cors'
// we will call dotenv config
dotenv.config()

// instance app of express
const app=express()
app.use(express.json())
app.use(cors())

//connect the DB
connectDB()

// use the routes
app.use('/api',userRoutes)


const port=process.env.PORT || 5000

// start the server

app.listen(port,()=>{
    console.log(`The server is running on  http://localhost:${port}`)
})
