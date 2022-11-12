const  User=require("../models/User")
const customApiError =require('../error/error.js')
const Login=async(req,res,next)=>{
    const {email,password}=req.body
    console.log(req.body)
    const user=await User.findOne({email,password})
if(!user){
    return next(customApiError("user not found ",404))
}
res.status(200).json({User:user})
}
const Signup=async (req,res,next)=>{
const  {name,password,email,phonenumber}=req.body
if(!name || !password || !email || !phonenumber){

   return next(customApiError("please send name ,password,email,phonenumber",500))
}
const user=await User.create(req.body)
if(!user){
    const error=new Error("couldnt save user")
    error.code=500
    return next(error)
}
res.status(200).json({User:user})
    // res.status(200).json({msg:"sign up routes"})
}

module.exports={
    Login,
    Signup
}