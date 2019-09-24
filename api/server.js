const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const authRouter = require('../auth/authRouter');
const searchRouter = require('../search/searchRouter');

const server = express();
// require('env').config();

const sessionConfig = {
    name: 'user sessions',
    secret: 'cookie monster secret', 
    cookie: {
        maxAge: 1000 * 60 * 60 * 6,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialize: false,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 60 * 6
    })
}

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

server.use('/api/auth', authRouter);
server.use('/api/search', searchRouter);
// server.use('/api/user/',) //update + delete user
// server.use('api/user/strains',) //add + delete saved strains
module.exports = server;