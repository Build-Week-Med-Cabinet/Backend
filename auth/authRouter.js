const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('./authModel');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8)

    Users.add({ username, password: hash })
        .then(saved => {
            res.status(200).json({ saved })
        })
        .catch(err => {
            res.status(400).json({ err })
        })
})
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user.username;
                res.status(200).json({ message: `Welcome ${user.username}` })
            } else {
                res.status(400).json({ message: 'Invalid credentials' })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({ message: 'error logging out' })
            } else {
                res.status(200).json({ message: 'logged out' })
            }
        })
    } else {
        res.status(200).json({ message: 'already logged out' })
    }
})

module.exports = router;