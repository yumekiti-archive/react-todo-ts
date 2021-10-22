const user = require('./user');

module.exports = (connection) => {
    connection.query(user.table);
}