const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lsystem",
    password: "ts",
    port: 5432,
});

module.exports = pool;