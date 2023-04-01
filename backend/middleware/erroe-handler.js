const { CustomAPIError } = require("./Errors")
const errorHandlerMiddleware = (err, req, res, next)=>{
    console.log(err);
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({mes : err.message})
    }
    return res.status(500).json({msg : "Something went wrong, please try again"})
}

module.exports = errorHandlerMiddleware;