const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8)


})
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    
})