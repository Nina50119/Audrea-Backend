class customError extends Error{
    constructor(msg,statusCode){
        super(msg)
this.statusCode=statusCode
    }
}
const customApiError =(msg,statusCode)=>{
    return new customError(msg,statusCode)
}
module.exports=customApiError