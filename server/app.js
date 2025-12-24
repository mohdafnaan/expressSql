import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT;

const app = express()

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg : "server is running"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:5000`)
})  