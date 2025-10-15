import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import sweetRouter from "./routes/SweetRoutes.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'


//app config
const app = express()
const port = process.env.PORT || 4000

//middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB().catch(err => console.error('DB connection error:', err));

// api endpoint
app.use("/api/sweet", sweetRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)

app.get('/',(req, res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://gurralarakesh2002_db_user:Rakesh(2002)@cluster0.2c5xluz.mongodb.net/?