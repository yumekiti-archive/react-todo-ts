const user = require('./user');

const migrations = (connection) => {
    if (connection.query === null) return;
    connection.query(user.table);
}

exports.migrations = migrations;