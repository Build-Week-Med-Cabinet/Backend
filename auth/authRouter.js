const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

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

module.exports = router;