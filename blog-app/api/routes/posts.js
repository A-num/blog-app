
const router = require("express").Router();
const User = require("../models/User");
const post = require("../models/post");


//CREATE NEW POST
router.post("/", async (req,res)=>{
   const newPost  = new post(req.body);
   try {
    const savePost = await newPost.save()
    res.status(200).json(savePost);

   } catch (err) {
     res.status(500).json(err);
   }
});

//UPDATE POST
router.put("/:id", async (req,res)=>{
    try{
        const post1 = await post.findById(req.params.id);
        if(post1.username === req.body.username){
        try {
           const updatedPost = await post.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
           res.status(200).json(updatedPost);

        } catch (err) {
            res.status(500).json(err);
        }
    }
    else{
        res.status(401).json("Can update only your post..");
    } }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE POST

router.delete("/:id", async (req,res)=>{
    try{
        const posta = await post.findById(req.params.id);
        if(posta.username === req.body.username){
        try {
           await posta.deleteOne();
           res.status(200).json("Post has been deleted..");

        } catch (err) {
            res.status(500).json(err);
        }
    }
    else{
        res.status(401).json("Can delete only your post..");
    } }
    catch(err){
        res.status(500).json(err);
    }
});

//GET POST

router.get("/:id", async (req, res) =>{
    try {
        const post1 = await post.findById(req.params.id);
        res.status(200).json(post1)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL POSTS
router.get("/", async (req, res) =>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts= await post.find({username})
        }
        else if(catName){
            posts = await post.find({categories: {$in:[catName]}})
        }else{
            posts = await post.find();
        }res.status(200).json(posts)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
