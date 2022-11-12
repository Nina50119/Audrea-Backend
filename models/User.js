const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please name is required"],
        maxLength:40,
        minLength:3
    },
    email:{
        type:String,
        required:[true,"please provide yoour email"],
        unique:true,
    },
    password:{
        type:String,
        minLength:3,
    },
    phonenumber:{
        type:Number,
        required:[true, "please number is required"]
    }
})
module.exports=mongoose.model("User",UserSchema)