import express from "express";
import dotenv from "dotenv";
dotenv.config()


const app = express();
app.use(express.json())
const port = process.env.PORT;
import publicRouter from "./controllers/public/public.js"
app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg : "server is running"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
app.use("/public",publicRouter)
app.listen(port,()=>{
    console.log(`server is running at http://localhost:5000`);
})