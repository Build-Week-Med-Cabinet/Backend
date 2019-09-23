const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter');
const searchRouter = require('../search/searchRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/search', searchRouter);
// server.use('/api/user/',) //update + delete user
// server.use('api/user/strains',) //add + delete saved strains
module.exports = server;