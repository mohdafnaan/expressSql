import express from "express";
import bcrypt from "bcrypt"
const router = express.Router()
import pool from "../../utils/dbConnect.js"
router.post("/register",async(req,res)=>{
    try {
      let {fullName , email , password,  } = req.body
      let bPAss = await bcrypt.hash(password,10);
         await pool.execute(
        "INSERT INTO users (fullName,email,password) VALUES (?,?,?)",
        [fullName,email,bPAss]
      )
      res.status(200).json({msg : "user registered sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.put("/update/:id",async (req,res)=>{
    try {
        let id = req.params.id;
        let userInput = req.body
        let fullName = userInput.fullName;
        let email = userInput.email
        await pool.execute(
            `UPDATE users SET fullName = ?,email = ? WHERE id = ?`,
            [fullName,email,id]
        )
        res.status(200).json({msg : "user updated sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
router.delete("/delete/:id",async (req,res)=>{
    try {
        let id = req.params.id;
        await pool.execute(
            "DELETE FROM users WHERE id = ?",[id]
        )
        res.status(200).json({msg : "user delted sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})
export default router