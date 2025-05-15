const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config();

const app = express();

const userModel = require('./Model/user');

app.use(express.json())

const MONGO_URI = process.env.MONGO_URL
const PORT = process.env.PORT || 4200

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: "POST", 
    credentials: true,
}))

mongoose.connect("mongodb+srv://vinayfagodia:vinayfagodia@event.t2k8cl6.mongodb.net/event")
.then(()=> console.log("Database is connected."))
.catch((err)=> console.log("There is some error!", err))

app.get('/', (req, res)=>{
    res.send("Hi the server is working!");
})

app.post('/user', (req, res)=>{
    userModel.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
})


app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})