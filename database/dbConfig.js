const knex = require('knex');
<<<<<<< HEAD

const configOptions = require('../knexfile').development;

=======
const configOptions = require('../knexfile').development;
>>>>>>> a0fac2f4326c0dc6610fdd9248c9d22eedf6f468
module.exports = knex(configOptions);