const user = require('./user');

const table = (connection) => {
    connection.query(user.table);
}

exports.table = table;