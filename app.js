const express=require("express")
const PORT=process.env.PORT || 5000
const app=express()
const userRouter=require("./routes/User")
const cors=require('cors')
app.use(cors())
app.use(express.json())
const errorHanlder=require("./middlewares/errorHandler")
app.use("/api/v1/",userRouter)
app.use(errorHanlder)
const start=async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(` app is running on port ${PORT}`)
require("./db/connection")

        })
        
    }catch(error){
        console.log(error)
    }
}
start()