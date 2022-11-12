const express=require("express")
const router=express.Router()
const {Login,Signup}=require("../controller/User")

router.route("/login").post(Login)
router.route("/signup").post(Signup)


module.exports=router