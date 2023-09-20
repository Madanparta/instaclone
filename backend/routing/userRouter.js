const express = require('express');
const userRouter = express.Router();
const User = require('../modles/postData');
const data = require('../data/user');

userRouter.post('/',async (req,res)=>{
    try{
        
        const userPost = await User.create(req.body);
        res.status(200).json({
            status:"success",
            message:userPost
        })
    }catch(error){
        res.status(500).json({
            status:"failed",
            message:"data not comes to database something worng"
        })
    }
})


module.exports = userRouter;