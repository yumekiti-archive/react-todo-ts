// get the client
const mysql = require('mysql2');

const migrations = require('./index');

// create the connection to database
const connection = mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'database'
});

connection.connect(() => {
    // connection.query(user.table);
    migrations(connection)
});