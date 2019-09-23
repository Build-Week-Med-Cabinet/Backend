const express = require('express');
const cors = require('cors');

const authRouter = require('../auth/authRouter');

const server = express();

const sessionConfig = {
    name: 'user sessions',
    secret: 'cookie monster secret', 
    cookie: {
        maxAge: 1000 * 60 * 60 * 6,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialize: false
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
// server.use('/api/strains', strainsRouter); //strain search//
// server.use('/api/user/',) //update + delete user
// server.use('api/user/strains',) //add + delete saved strains
module.exports = server;