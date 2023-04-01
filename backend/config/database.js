const mongoose = require("mongoose")
const Database_URL = process.env.MONGODB_URL;
exports.connectDatabase = () =>{
    mongoose.connect(Database_URL).then((res)=>{
        console.log("Database connected with the server",res.connection.host);
    }).catch((err)=>{
        console.log("There is some issue with connecting your server.",err);
    })
}