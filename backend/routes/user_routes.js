const express = require("express");
const jwt = require("jsonwebtoken")
const user_router = express.Router();

const User = require("../models/user_models.js")

user_router.get("/", async (req,resp)=>{
    const users = await User.find()
    return resp.json({users});
})

user_router.post("/googleRegister", async (req,resp)=>{
    const {name, email} = req.body
    const user = new User()
    user.name = name
    user.email = email
    user.save()

    const token = jwt.sign({user_id : user._id}, "MySecretKey123")
    return resp.json({token})
})

user_router.get("/profile",verifyToken, async(req, resp)=>{
    const user = await User.findOne({_id: req.user.user_id})
    return resp.json({user})
})

function verifyToken(req, resp, next){
    const token = req.headers.authorization
    if(!token){
        return resp.json({message: "Access Denied"})
    }

    const data = jwt.verify(token, "MySecretKey123")
    req.user = data
    next()
}
module.exports = user_router