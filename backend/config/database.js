const mongoose = require("mongoose")
const url = "mongodb+srv://user:UserPassword@cluster0.kzv0qp6.mongodb.net/?retryWrites=true&w=majority"
const Database_URL = process.env.MONGODB_URL || url;
exports.connectDatabase = () =>{
    mongoose.connect(Database_URL).then((res)=>{
        console.log("Database connected with the server",res.connection.host);
    }).catch((err)=>{
        console.log("There is some issue with connecting your server.",err);
    })
}