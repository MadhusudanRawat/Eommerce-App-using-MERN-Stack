const express = require("express");
require("dotenv").config({path : "./config/config.env"})
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors");
const { connectDatabase } = require("./config/database");
const errorHandlerMiddleware = require("./middleware/erroe-handler")
const app = express();
const PORT = process.env.PORT || 80

console.log(
    process.env.MONGODB_URL
);

const productRoute = require("./routers/productRouter")
// ============ middleware ============
app.use(express({extended : true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors() )
connectDatabase()
// ============ routers ============
app.use("/v1",productRoute)
// ============ routers ============
app.use(errorHandlerMiddleware)

app.listen(PORT,()=>{
    console.info("Server is running at port",PORT)
})
// module.exports = app;
