const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'db',
    password: 'pass',
    port: 5432, 
});

module.exports = pool;
