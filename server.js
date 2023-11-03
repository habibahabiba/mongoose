const express = require("express");

// 2 create istance

const app = express();

// 4 require dotenv

require("dotenv").config()


app.use(express.json())

//6 connect db
const connectDB = require("./config/connectDB")
connectDB()

// 7 create routes


// 3 create port
const PORT = process.env.PORT


//5 create server

app.listen(PORT , error=>{
    error ? console.error('Fail to connect , ${error}'):
    console.log('server is running on port ${PORT}')
})