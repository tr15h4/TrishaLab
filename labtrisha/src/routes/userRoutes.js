const express = require('express');
const user = require('user');
const router = express.Router();

// Signup route'
router.post('/signup', async (req, res) => {
    
    res.json({ message: 'Signup successful' });
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.findOne({ username, password });
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status().json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
