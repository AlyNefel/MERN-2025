import express from 'express'
import router from './routes/languages.routes.js'

const app =express()
app.use(express.json());
const port = 3000

// use our routes
app.use("/api",router)
app.listen(port,()=>{
    console.log(`Server is running on https://localhost:${port}`)
})