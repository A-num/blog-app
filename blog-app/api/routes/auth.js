const router = require("express").Router();
const User = require("../models/user");

//Register
router.post("/register", async(req,res)=>{
    try{
        
    } catch(err){
        res.status(500).json(err);
    }
});

//login
