const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express();

app.use(express.json())

const MONGO_URI = process.env.MONGO_URL
const PORT = process.env.PORT || 4200

mongoose.connect(MONGO_URI)
.then(()=> console.log("Database is connected."))
.catch((err)=> console.log("There is some error!", err))

app.get('/', (req, res)=>{
    res.send("Hi the server is working!")
})


app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})