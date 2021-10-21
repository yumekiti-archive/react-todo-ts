var express = require('express');
var router = express.Router();
var database = require('./../database/connection');

// mysqlに接続する。
database;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('hello, world!');
});

module.exports = router;
