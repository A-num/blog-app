const router = require("express").Router();
const User = require("../models/user");

//Register
router.post("/register", async (req,res)=>{
    try{
        const newUser = new User({
            ...req.body
        })
        const user = await newUser.save()
        res.status(200).json(user);
    } catch(err){
        res.status(500).json(err);
    }
});

//login

module.exports = router
