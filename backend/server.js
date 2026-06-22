const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const userModel = require('./Model/user');

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4200;

if (!MONGO_URI) {
    console.error("MONGO_URI is not set in .env file!");
    process.exit(1);
}

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true,
}));

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database is connected."))
    .catch((err) => console.log("There is some error!", err));

app.get('/', (req, res) => {
    res.send("Hi, the server is working!");
});

app.post('/user', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNo, password } = req.body;

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({ firstName, lastName, email, phoneNo, password: hashedPassword });
        res.json({ success: true, data: { ...user._doc, password: undefined } });
    } catch (err) {
        res.status(500).json({ success: false, message: "Signup failed", error: err.message });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }
        res.status(200).json({ success: true, message: 'Login successful', userId: user._id });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
