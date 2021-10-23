var express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {

  const result  = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })

  res.json(result);
});

module.exports = router;
