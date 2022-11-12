const  mongoose=require("mongoose")

const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMs:5000,
    autoIndex:false,
maxPoolSize:10,
serverSelectionTimeoutMs:5000,
socketTimeoutMS:45000,
family:4
}


const uri='mongodb://localhost:27017/BOOK'
const connectWithDB=(uri)=>{
    mongoose.connect(uri,options,(err,db)=>{
        if(err) console.log(err)
        else console.log("database connection")
    })
}

connectWithDB(uri)
module.exports=connectWithDB