const errorHandler=async(error,req,res,next)=>{
console.log(error.message)
res.status(error.statusCode).json({error:error.message})

}
module.exports=errorHandler