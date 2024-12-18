import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectdb from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';


// App config 
const PORT = process.env.PORT || 4000;
const app = express()
await connectdb()

// Api routes 
app.get('/',(req,res)=>{
    res.send('Hello from Express server')
})
app.use('/api/user',userRouter)


// initalize  Middleware
app.use(express.json())
app.use(cors())

app.listen(PORT,(req,res)=>{
    console.log(`Server Running on port ${PORT}`)
})