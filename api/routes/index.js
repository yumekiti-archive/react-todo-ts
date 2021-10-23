var express = require('express');
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Creating a new record
  prisma.user.create({
    name: "Alice",
    email: "alice@prisma.io"
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
