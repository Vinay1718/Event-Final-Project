const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const userModel = require('./Model/user');

app.use(express.json());

const MONGO_URI = process.env.MONGO_URL;
const PORT = process.env.PORT || 4200;

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: "POST", 
    credentials: true,
}));

mongoose.connect("mongodb+srv://vinayfagodia:vinayfagodia@event.t2k8cl6.mongodb.net/event")
    .then(() => console.log("Database is connected."))
    .catch((err) => console.log("There is some error!", err));
app.get('/', (req, res) => {
    res.send("Hi, the server is working!");
});
app.post('/user', (req, res) => {
    userModel.create(req.body)
        .then((data) => res.json({ success: true, data }))
        .catch((err) => res.status(500).json({ success: false, message: "Signup failed", error: err }));
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
