
const router = require("express").Router();
const User = require("../models/User");
const post = require("../models/post");
const bcrypt = require('bcrypt');

//UPDATE
router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        if(request.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
      
    try{
        const updateUser =  await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            
        );
        res.status(200).json(updateUser)
        
    } catch(err){
        res.status(500).json(err);
    }
}
    else {
        res.status(401).json("Can update only your own account")
    }
});

//DELETE
router.delete("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id){
        try{
             const user = await User.findById(req.params.id);      
    try{
        await post.deleteMany({username: user.username});
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted..")
        
    } catch(err){
        res.status(500).json(err);
    }
}
    catch(err){
        res.status(404).json("user not found.");}
}
    else {
        res.status(404).json("Can delete only your own account")
    }
});

//GET USER

router.get("/:id", async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        const{password, ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = router
